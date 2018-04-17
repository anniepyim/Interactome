#!/usr/bin/env python

import cgi, os, re, sys
import cgitb;cgitb.enable()
import pandas as pd
import numpy as np
import pymysql
import json

form = cgi.FieldStorage()
organism = form.getvalue('organism')
host = form.getvalue('host')
port = form.getvalue('port')
user = form.getvalue('user')
passwd = form.getvalue('passwd')
unix_socket = form.getvalue('unix_socket')

# organism = "Human"
# host = "localhost"
# port = 3306
# user = "root"
# passwd = ""
# unix_socket = "/tmp/mysql.sock"

conn = pymysql.connect(host=host, port=port, user=user, passwd=passwd, db=organism, unix_socket=unix_socket)
cur = conn.cursor()
query = "SELECT geneID, count(log2) as upfreq, avg(log2) as uplog2 from target_exp where userID='mitox' and log2 >= 0 group by geneID"
up = pd.read_sql(query, con=conn)
query = "SELECT geneID, count(log2) as downfreq, avg(log2) as downlog2 from target_exp where userID='mitox' and log2 < 0 group by geneID"
down = pd.read_sql(query, con=conn)
query = "SELECT * from target"
target = pd.read_sql(query, con=conn)
query = 'select geneID, count(mutation) as mutation from target_mut where userID = "mitox" group by geneID'
mut = pd.read_sql(query, con=conn)
links = pd.read_sql('SELECT * from links', con=conn)
conn.close()

main = pd.merge(up, down, on="geneID")
main['log2'] = np.where(main['uplog2'].abs()>main['downlog2'].abs(), main['uplog2'], main['downlog2'])
main['sampleID'] = 'test'
main['pvalue'] = 1
main = pd.merge(main,mut,how='left', on='geneID')
main['mutation'] = main['mutation'].fillna(value=0).astype(int)
main = pd.merge(main,target,on="geneID")
main = main.to_json(orient='records')
links = links.to_json(orient = 'records')

json_all = [{'nodes' : main, 'links' : links}]
json_all = json.dumps(json_all)

print 'Content-Type: application/json\n\n'
print (json_all)

#print "Content-type: text/html\n"
#print "<html>"
#print main
#print "</html>"





