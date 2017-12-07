#!/usr/bin/env python
# coding: utf8

import tushare as ts
import backtrader as bt
import pandas as pd

#下载上证综指 20年的数据
df = ts.get_k_data('000300',index=True,start='2016-01-01')
df = df.set_index('date')
df.to_csv('000300-2016-2017.csv')


#
# #直接保存
# df.to_csv('000001-2016-2017_2.csv')

# df = pd.read_csv('000001-1997-2017.csv', parse_dates=True,index_col=0)
#
# data = bt.feeds.PandasData(dataname=df,
#                                # datetime='Date',
#
#                                nocase=True,
#                                )
# cerebro = bt.Cerebro()
# cerebro.adddata(data)
# cerebro.run()
# cerebro.plot()
