#!/usr/bin/env python
# coding: utf8


from sqlalchemy import Column, String,Integer, Float, DateTime
from sqlalchemy import Table, Text
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from pyquant.libs.mysqllib import session
from pyquant.libs.mysqllib import BaseModel as Base
import pandas as pd

# Many-Many Relation
symbolgroup_symbol = Table('symbolgroup_symbol', Base.metadata,
    Column('symbol_id', ForeignKey('symbol.id'), primary_key=True),
    Column('symbolgroup_id', ForeignKey('symbolgroup.id'), primary_key=True))

stockIndex_symbol = Table('stockIndex_symbol', Base.metadata,
    Column('stockIndex_id', ForeignKey('stockIndex.id'), primary_key=True),
    Column('symbol_id', ForeignKey('symbol.id'), primary_key=True))


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    username = Column(String)
    # fullname = Column(String)
    password = Column(String)

    # def __repr__(self):
    #     return "<User(name='%s', fullname='%s', password='%s')>" % (
    #         self.name, self.fullname, self.password)




class Symbol(Base):

    __tablename__ = 'symbol'
    __table_args__ = {
        'mysql_engine': 'InnoDB',
        'mysql_charset': 'utf8',
    }

    id = Column(Integer, primary_key=True)
    exchange_id = Column(Integer)
    ticker = Column(String)
    instrument = Column(String)
    name = Column(String)
    sector = Column(String)
    symbolgroup = relationship('SymbolGroup',secondary = symbolgroup_symbol,back_populates = 'symbol')
    stockIndex = relationship('StockIndex',secondary = stockIndex_symbol,back_populates = 'symbol')


    def __repr__(self):
        return "<Symbol(id='%s', exchange_id='%s', ticker='%s', instrument='%s', name='%s', sector='%s')>" % (
            self.id, self.exchange_id, self.ticker, self.instrument, self.name, self.sector)

    @classmethod
    def get_stock_by_ticker(cls,  ticker, index=False, columns=None, lock_mode=None):

        scalar = False
        if columns:
            if isinstance(columns, (tuple, list)):
                query = session.query(*columns)
            else:
                scalar = True  # 只查一个字段
                query = session.query(columns)
        else:
            query = session.query(cls)
        if lock_mode:
            query = query.with_lockmode(lock_mode)

        query = query.filter(cls.ticker==ticker, cls.instrument==('index' if index else 'stock'))

        if scalar:
            return query.scalar()
        return query.first()


    @staticmethod
    def find_all(limit=30, offset=0, output='dict'):
        # return session.query(__class__).filter(filter_context).limit(limit).offset(offset).all()
        result = session.query(__class__).limit(limit).offset(offset).all()

        if output == 'dict':
            return [row.to_dict() for row in result]
        else:
            return result

    @staticmethod
    def get_list_by_symbolgroup_id(symbolgroup_id, limit=30, offset=0):
        return session.query(Symbol).filter(Symbol.symbolgroup.any(id=symbolgroup_id)).\
            limit(limit).offset(offset).all()

    @staticmethod
    def get_index_list():
        return session.query(Symbol).filter(Symbol.instrument == 'index').all()


    @staticmethod
    def get_by_ticker(ticker, index=False):
        """
        返回ticker的symbol

        :param ticker:
        :param index:
        :return:
        """
        return session.query(__class__).filter(Symbol.ticker == ticker,
                                               Symbol.instrument == ('index' if index else 'stock')).first()


class DailyPrice(Base):
    __tablename__ = 'dailyPrice'

    id = Column(Integer, primary_key=True)
    symbol_id = Column(Integer, ForeignKey('symbol.id'))
    price_date = Column(DateTime)
    open_price = Column(Float)
    high_price = Column(Float)
    low_price = Column(Float)
    close_price = Column(Float)
    volume = Column(Integer)
    symbol = relationship("Symbol",back_populates="daily_price")


    def __repr__(self):
        return "<Daily_price( symbol_id='%s', price_date='%s', o='%s', h='%s', l='%s', c='%s', v=='%s')>" % (
            self.symbol_id, self.price_date, self.open_price, self.high_price, self.low_price, self.close_price, self.volume)

    def to_dict(self):
        obj = super(DailyPrice, self).to_dict()
        obj['price_date'] = str(obj['price_date'])
        # obj['symbol'] = self.symbol
        return  obj


    @staticmethod
    def get_by_symbol_id(symbol_id, fromdate=None, todate=None, output = 'dict'):
        """
        根据symbol_id 查daily price

        :param symbol_id:
        :param fromdate:
        :param todate:
        :param output:
        :return:
        """
        where = []

        where.append(DailyPrice.symbol_id == symbol_id)

        if fromdate:
            where.append(DailyPrice.price_date >= fromdate)

        if todate:
            where.append(DailyPrice.price_date < todate)

        # print(where)

        if output == 'df':
            df = pd.read_sql(session.query(DailyPrice).filter(*where).statement, session.bind)
            del df['id']
            del df['symbol_id']
            df = df.set_index('price_date')
            df.columns =  ['open', 'high',  'low','close', 'volume']
            cols = ['open', 'high', 'close', 'low', 'volume']
            df = df.ix[:, cols]
            return df
        elif output == 'dict':
            return [row.to_dict() for row in session.query(DailyPrice).filter(*where).all()]
        else:
            return session.query(DailyPrice).filter(*where).all()



class StockIndex(Base):
    __tablename__ = 'stockIndex'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    symbol_id = Column(Integer, ForeignKey('symbol.id'))
    symbol = relationship('Symbol', secondary=stockIndex_symbol, back_populates='stockIndex')


class SymbolGroup(Base):
    __tablename__ = 'symbolgroup'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship("User", back_populates="symbolgroup")
    symbol = relationship('Symbol', secondary=symbolgroup_symbol, back_populates='symbolgroup')


    @staticmethod
    def get_system_groups():
        return session.query(__class__).filter(SymbolGroup.user_id == 0).all()


class Strategy(Base):
    __tablename__ = 'strategy'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    user_id = Column(Integer, ForeignKey('user.id'))
    filePath = Column(String)
    desc = Column(String)



# One-Many Relations
Symbol.daily_price = relationship("DailyPrice", back_populates="symbol")
User.symbolgroup = relationship("SymbolGroup", back_populates="user")



def _query_relation():

    query = session.query(DailyPrice).filter(DailyPrice.id == '7798525').all()
    pprint.pprint([row.to_dict() for row in query])


def _query_join():
    pprint.pprint(session.query(DailyPrice).join(Symbol).filter(Symbol.id == 2433).limit(10).all())


def _symbol_find_all():
    # print(Symbol.find_all((Symbol.id > 200),10))
    print(Symbol.find_all(limit = 10))

def _add_user_symbolgroup():
    user = User(username='new user', password='123')
    print(user)

    sg = SymbolGroup(name='上证50')

    user.symbolgroup = [sg]
    session.add(user)
    session.commit()

def _test_m_m_relation1():
    sd = SymbolGroup.get_by_id(3)
    print(sd.symbol)

    si = StockIndex.get_by_id(1)
    print(si.symbol)

def _test_m_m_relation2():
    query = session.query(Symbol). \
        filter(Symbol.symbolgroup.any(id=3)). \
        all()
    print(query)

def _test_add_m_m_relation():
    sd = SymbolGroup.get(3)
    sd.symbol.append(Symbol.get(19))
    session.commit()

def _test_delete_m_m_relation():
    sd = SymbolGroup.get(3)
    sd.symbol.remove(Symbol.get(19))
    session.commit()

if __name__ == '__main__':
    """"""
    import pprint
    # _query()
    #
    # _get()
    # print(Symbol.get_by_ticker('000001', True))
    # query_relation()
    # _query_join()

    # _symbol_find_all()
    # print(Symbol.query().limit(10).all())

    # print(User.get(1).to_dict())
    # print(Symbol.get(17).to_dict())

    # query = session.query(Symbol). \
    #     filter(Symbol.symbolgroup.any(id=3)). \
    #     all()
    #
    # print(query)

    # _test_add_m_m_relation()
    # _test_delete_m_m_relation()

    # print(session.query(SymbolGroup).filter(SymbolGroup.user_id == 0).all())
    # _symbol_find_all()
    # print(DailyPrice.get_by_id(100).to_dict())
    # _test_m_m_relation1()
    # print(StockIndex.get_all())
    # _test_m_m_relation1()

    print(Symbol.get_stock_by_ticker('000001', index=True))