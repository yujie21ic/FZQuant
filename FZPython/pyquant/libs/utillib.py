#!/usr/bin/env python
# coding: utf8

import time
import pyquant.libs.tusharelib as tusharelib
import pyquant.libs.mongolib as mongolib
from pyquant.models.datasource import MongoSource

print('======== import utillib =========')
def fill_data(code,index):
    """
    从tushare下载数据到mongolib
    :return:
    """

    df = tusharelib.get_data(code, index)
    col_name = MongoSource.get_col_name(code)
    mongolib.insert_data(col_name,df)

    return

def query_to_json(query):
    arr = []
    for row in query:
        arr.append(row.to_dict())

    return arr

def record_time(fcn, **kwargs):
    # start = time.clock()
    start = time.time()
    obj = fcn(**kwargs)
    # end = time.clock()
    end = time.time()
    print('【执行】',fcn.__name__, '消耗时间', end - start)

    return obj

if __name__ == '__main__':
    """"""

    from pyquant.db_models import Symbol as m_symbol
    from pyquant.libs.mysqllib import session, engine

    query = session.query(m_symbol)

    print(query_to_json(query.all()))