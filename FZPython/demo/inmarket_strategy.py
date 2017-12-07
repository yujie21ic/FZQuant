# -*- coding: utf-8 -*-


import backtrader as bt
import pandas as pd
import pyquant.strategies.mystrategy as mystrategy
import datetime

codeList = ['000001.csv','000300.csv','600398.csv','600435']

datapath = '../datas/000001.csv'

df = pd.read_csv(datapath, parse_dates=True,index_col=0)

data = bt.feeds.PandasData(dataname=df,
                            fromdate=datetime.datetime(2017,1,1),
                            nocase=True,)

#测试入市策略，

cerebro = bt.Cerebro()
cerebro.adddata(data)
cerebro.addstrategy(mystrategy.TestStrategy)
cerebro.run()
cerebro.plot()