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

conn = pymysql.connect(host=host, port=port, user=user, passwd=passwd, db=organism, unix_socket=unix_socket)
cur = conn.cursor()
cur.execute("DROP TABLE IF EXISTS tmp")
query = "CREATE table tmp select gene, log2 from target_exp where userID='mitox' and log2 > 0"
cur.execute(query)
cur.execute("DROP TABLE IF EXISTS up")
query = "CREATE table up select gene as gene, count(gene) as upfreq, avg(log2) as uplog2 from tmp group by gene"
cur.execute(query)
cur.execute("DROP TABLE IF EXISTS tmp")
query = "CREATE table tmp select gene, log2 from target_exp where userID='mitox' and log2 < 0"
cur.execute(query)
cur.execute("DROP TABLE IF EXISTS down")
query = "CREATE table down select gene as gene, count(gene) as downfreq, avg(log2) as downlog2 from tmp group by gene"
cur.execute(query)
cur.execute("DROP TABLE IF EXISTS tmp2")
query = "CREATE table tmp2 select up.gene, up.upfreq, up.uplog2, down.downfreq, down.downlog2 from up inner join down on up.gene = down.gene"
cur.execute(query)
query = 'SELECT tmp2.gene, tmp2.upfreq, tmp2.uplog2, tmp2.downfreq, tmp2.downlog2, target.process, target.gene_function from tmp2 inner join target on tmp2.gene=target.gene'
main = pd.read_sql(query, con=conn)
cur.execute("DROP TABLE IF EXISTS tmp")
query = "CREATE table tmp select gene, mutation from target_mut where userID='mitox'"
cur.execute(query)
query = 'SELECT gene, count(gene) as mutation from tmp group by gene'
mut = pd.read_sql(query, con=conn)
links = pd.read_sql('SELECT * from links', con=conn)
conn.close()

main['log2'] = np.where(main['uplog2'].abs()>main['downlog2'].abs(), main['uplog2'], main['downlog2'])
main['sampleID'] = 'test'
main['pvalue'] = 1
main = pd.merge(main,mut,how='left', on='gene')
main['mutation'] = main['mutation'].fillna(value=0).astype(int)
main = main.to_json(orient='records')
links = links.to_json(orient = 'records')

json_all = [{'nodes' : main, 'links' : links}]
json_all = json.dumps(json_all)

print 'Content-Type: application/json\n\n'
print (json_all)





