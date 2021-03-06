# -*- coding: utf-8 -*-


from flask_restful import Resource, reqparse
from pyquant.db_models import (Symbol, DailyPrice, User, SymbolGroup, StockIndex,
                               Strategy)
import pyquant.libs.utillib as utillib
from pyquant.models.backtest import Backtest
from pyquant.models.symbol_data import SymbolData

parser = reqparse.RequestParser()
parser.add_argument('limit', default=30)
parser.add_argument('offset')
parser.add_argument('todate')
parser.add_argument('fromdate')
parser.add_argument('index')
parser.add_argument('symbolgroup')
parser.add_argument('task')

def send_response(obj=None, err=None):
    if obj:
        response = {'resCode': '00100000', 'obj': obj};
        return response, 200, {'Access-Control-Allow-Origin': '*'}


class TodoList(Resource):


    def post(self):
        args = parser.parse_args()
        print('args', args)

        return 'hello', 201



class DailyPriceRouter(Resource):
    @staticmethod
    def get(_id=None, symbol_id=None):
        """

        :param symbol_id:
        :return:
        """
        args = parser.parse_args()
        if _id:
            response = DailyPrice.get_by_id(_id).to_dict()
        elif symbol_id:

            daily_prices = DailyPrice.get_by_symbol_id(symbol_id, fromdate=args.fromdate, todate = args.todate, output='dict')
            response = {"list": daily_prices}
        else:
            array = [row.to_dict() for row in DailyPrice.get_all()]
            response = {"list": array}

        return send_response(response)




class SymbolRouter(Resource):

    @staticmethod
    def get(_id=None, symbolgroup_id=None):
        """

        :return:
        """
        args = parser.parse_args()

        if _id:
            response = Symbol.get_by_id(_id).to_dict()
        elif symbolgroup_id: # 返回该symbolgroup下所有的symbol
            array = [row.to_dict() for row in Symbol.get_list_by_symbolgroup_id(symbolgroup_id)]
            response = dict(list=array)
        else:
            array = Symbol.find_all(limit=args.limit, offset=args.offset, output='dict')
            response = dict(list=array)

        return send_response(response)


class SymbolGroupsRouter(Resource):


    @staticmethod
    def get(_id=None):
        """
        :return:
        """

        # args = parser.parse_args()

        if _id:
            response = SymbolGroup.get_by_id(_id).to_dict()
        else:
            array = [row.to_dict() for row in SymbolGroup.get_all()]
            response = dict(list=array)

        return send_response(response)


    def post(self, user_id=None):
        """
        user 新增 symbolgroup
        :return:
        """

        args = parser.parse_args()

        user = User.get_by_id(user_id)

        symbolgroup = args.symbolgroup

        print('sg', symbolgroup)


        return send_response('ok')

class StockIndexRouter(Resource):

    @staticmethod
    def get(_id=None):
        """
        :return:
        """

        args = parser.parse_args()


        if _id:
            return send_response(StockIndex.get_by_id(_id).to_dict())
        else:
            array = StockIndex.get_all()
            array = [row.to_dict() for row in array]

            return send_response(dict(list= array))


class StragegyRouter(Resource):

    @staticmethod
    def get(_id=None):
        """
        :return:
        """

        args = parser.parse_args()

        if _id:
            return send_response(Strategy.get_by_id(_id).to_dict())
        else:
            array = Strategy.get_all()
            array = [row.to_dict() for row in array]
            return send_response(dict(list= array))


class StragegyRunRouter(Resource):
    """
    运行策略
    """
    @staticmethod
    def get(_id):
        """
        :return:
        """

        args = parser.parse_args()


        stra = Strategy.get_by_id(_id)

        filePath = stra.filePath

        sd = SymbolData(17, fromdate='2017-01-01', output='df')

        backtest = Backtest(filePath, sd)

        backtest.run_strategy(fromdate='2017-01-01')
        return send_response('run' + filePath )


class BacktestRouter(Resource):

    @staticmethod
    def get(action):
        """"""

class UserRouter(Resource):
    def get(self, uid):
        """
        :param code:
        :param fromdate:
        :return:
        """

        user = User.get(uid)

        return send_response(user.to_dict())

