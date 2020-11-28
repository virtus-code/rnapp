import React from 'react';
import {Button, Text, View} from 'react-native';
import { LoanService } from '../resources/persistence';
import { LoanModel } from '../resources/persistence/models';


interface Props {}
interface State {
  list: LoanModel[];
  index: number;
  numberTx:number;
}

const emptyLoans: LoanModel[] = [];

const TAG = '[App]';
export default class App extends React.Component<Props,State> {
  state = {
    list: emptyLoans,
    index: 8,
    numberTx:0
  };

  componentDidMount(){
    this.load();
  }

  load = async() =>{
    const listObj = await LoanService.findAll();
    const listTx = await LoanService.findAllTx();
    const list:LoanModel[]= [];
    listObj.forEach((loan, index)=>{
      list.push(loan.clone());
    });
    this.setState({list, numberTx:listTx.length});
  }

  addLoan = async () => {
    const {list, index} = this.state;

    const loan = LoanModel.init(
      {id:1,name:'Felix'},
      {id:2,name:'Daniela'},
      {
        name:`Prestamo1 ${Date.now()}`,
        pay_day:'2',
        amount_cap:1000,
        interes_perc:0,
        type:LoanModel.Type.PROVIDER,
        interest_type:LoanModel.InterestType.SIMPLE,
        currency:'1',
        date_loan:new Date()
      }
    );
    await LoanService.create(loan);

    this.load();
  };

  removeAll = async () => {
    await LoanService.deleteAll();
    this.load();
  };

  deleteLoan = async(loan:LoanModel) =>{
    await LoanService.delete(loan);
    this.load();
  }
  
  render() {
    const {list,numberTx} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View>
        <Text style={{
          fontSize: 24,
          fontWeight: '600',
          color: 'black',
        }}>Prueba de Loans Txs:({numberTx})</Text>
        <Button onPress={this.addLoan} title={'Agregar'} />
        <Button onPress={this.removeAll} title={'Eliminar todo'} />
        {list.map((element, index) => {
          return (
            <View key={index.toString()} style={{borderBottomWidth:1,borderColor:'grey'}}>
                <View style={{flexDirection:'row', alignItems:'center',paddingBottom:10}}>
                    <View>
                        <Text>Index: {index}</Text>
                        <Text>Id: {element.id}</Text>
                        <Text>Titulo2: {element.name_loan}</Text>
                        <Text>Elementos: {element.feeds.length}</Text>
                    </View>
                    <View>
                        <Button onPress={()=>this.deleteLoan(element)} title={'Eliminar'} />
                    </View>
                </View>
              {element.feeds.length>0 && (
                <>
                {element.feeds.map((feed, index)=>{
                  return (
                    <View key={index.toString()}>
                      <Text>Cuota {index+1}: {feed.id}</Text>
                    </View>
                  )
                })}
                </>
              )}
            </View>
          );
        })}
      </View>
        
      </View>
    );
  }
}
