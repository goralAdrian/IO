import React, { Component } from 'react';
import axios from 'axios';

//import ReactTable from 'react-table';

class DashboardAdmin extends Component {

    constructor(props) {
        super(props);
    
        this.ZmianaWCzasieRzeczywistynInput3 = this.ZmianaWCzasieRzeczywistynInput3.bind(this);
        this.ZmianaWCzasieRzeczywistynInput4 = this.ZmianaWCzasieRzeczywistynInput4.bind(this);
        
        //Aby Scope w funkcji ZmianaWCzasieRzeczywistynInput byl scopem klasy - nie funkcji
    
        this.state = {
            nazwa:'',
            adres:''  ,          
            liczba_miejsc:'',
            godzina_otwarcia:'',
            godzina_zamkniecia:'',
            cena:'',
            index_miejscowosc:'',

            nazwaMiejscowosc:''
            //,

           // wiersz:[]
        }
    }
    KlikniecieSubmit3 = async (event) => {
        event.preventDefault();
    
        const OdpowiedzSerwera3 = await axios.post('/api/Uzytkownik/PanelAdmina', {
            nazwa: this.state.nazwa,
            adres: this.state.adres,
            liczba_miejsc: this.state.liczba_miejsc,
            godzina_otwarcia: this.state.godzina_otwarcia,
            godzina_zamkniecia: this.state.godzina_zamkniecia,
            cena: this.state.cena,
            index_miejscowosc: this.state.index_miejscowosc,           
        });
    
        this.setState({
            nazwa:'',
            adres:''  ,          
            liczba_miejsc:'',
            godzina_otwarcia:'',
            godzina_zamkniecia:'',
            cena:'',
            index_miejscowosc:''
            
        });

        if(OdpowiedzSerwera3.data.zwracam_czy_poprawnie_dodalem_atrakcje===true)
        {    
            document.getElementById("KomunikatSUCCESS3").innerHTML = "Dodano nową atrakcje!"; 
            // window.setTimeout(() => 
            // {
            // this.props.history.push('/')
            // }, 2000)

            //refresh tabeli
        }
        else if(OdpowiedzSerwera3.data.zwracam_czy_poprawnie_dodalem_atrakcje===false)
        {
            document.getElementById("KomunikatERROR3").innerHTML = "Atrakcja o takiej nazwie istnieje!";  
        }
       
    
    } 

    ZmianaWCzasieRzeczywistynInput3(event) 
    {
        document.getElementById("KomunikatERROR3").innerHTML = "";  
        document.getElementById("KomunikatSUCCESS3").innerHTML = "";  
    
        const target = event.target;
        const value = target.value;
        
        const state = {...this.state}
    
        state[target.name] = value;
        
       
        this.setState(state);
    }
/*
    ZwrocWybor()
    {
        return(
        <select name="miejscowosc">
            <option>Testowanie</option>
            <option>Testowanie2</option>
        </select>
        );
        //pobrac z bazy, kiedy klikne?
    }
*/
/*
    ZwrocenieTabeliAtrakcja = async (event) => 
    {
        const OdpowiedzSerwera4 = await axios.post('/api/Uzytkownik/Panel_Admina/Zwroc_Tabele_Atrakcja',{wiersz:this.state.wiersz});
        
        return(
            <div>
             <ReactTable
             data={OdpowiedzSerwera4.data.wiersz}/>
            </div>
        );
       
    }
*/

KlikniecieSubmit4 = async (event) => {
    event.preventDefault();

    const OdpowiedzSerwera4 = await axios.post('/api/Uzytkownik/PanelAdmina2', {
        nazwaMiejscowosc: this.state.nazwaMiejscowosc       
    });

    this.setState({
        nazwaMiejscowosc:''
        
    });

    if(OdpowiedzSerwera4.data.zwracam_czy_poprawnie_dodalem_miejscowosc===true)
    {    
        document.getElementById("KomunikatSUCCESS4").innerHTML = "Dodano nową miejscowość!"; 
        // window.setTimeout(() => 
        // {
        // this.props.history.push('/')
        // }, 2000)

        //refresh tabeli
    }
    else if(OdpowiedzSerwera4.data.zwracam_czy_poprawnie_dodalem_miejscowosc===false)
    {
        document.getElementById("KomunikatERROR4").innerHTML = "Miejscowość o takiej nazwie istnieje!";  
    }
 

} 

ZmianaWCzasieRzeczywistynInput4(event) 
{
    document.getElementById("KomunikatERROR4").innerHTML = "";  
    document.getElementById("KomunikatSUCCESS4").innerHTML = "";  

    const target = event.target;
    const value = target.value;
    
    const state = {...this.state}

    state[target.name] = value;
   
   
    this.setState(state);
}



    render() {
        return (
            <div>
                <h2>Panel Admina</h2>

                <form onSubmit={this.KlikniecieSubmit3}> 
                    <h4>Atrakcja: </h4>
                    <table border="0">
                    <tr>
                        <td>Nazwa</td>
                        <td>Adres</td>
                        <td>Liczba miejsc</td>
                        <td>Godzina otwarcia</td>
                        <td>Godzina zamknięcia</td>
                        <td>Cena</td>
                        <td>Miejscowosc</td>
                    </tr>
                    <tr>
                    <td><input type="text" name="nazwa" value={this.state.nazwa} required onChange={this.ZmianaWCzasieRzeczywistynInput3}/></td>
                   
                    <td> <input type="text" name="adres" value={this.state.adres} required onChange={this.ZmianaWCzasieRzeczywistynInput3}/></td>
                   
                    <td><input type="number" min="0" name="liczba_miejsc" value={this.state.liczba_miejsc} required onChange={this.ZmianaWCzasieRzeczywistynInput3}/></td>
                   
                    <td><input type="time" name="godzina_otwarcia" value={this.state.godzina_otwarcia} required onChange={this.ZmianaWCzasieRzeczywistynInput3}/></td>
                    
                    <td><input type="time" name="godzina_zamkniecia" value={this.state.godzina_zamkniecia} required onChange={this.ZmianaWCzasieRzeczywistynInput3}/></td>
                    
                    <td><input type="number" step="0.01" name="cena" value={this.state.cena} required onChange={this.ZmianaWCzasieRzeczywistynInput3}/></td>
                    
                    <td>              
                       {/* <this.ZwrocWybor/>*/}
                       <input type="number" min="0" name="index_miejscowosc" value={this.state.index_miejscowosc} required onChange={this.ZmianaWCzasieRzeczywistynInput3}/>
                    </td>

                    </tr>
                    </table>
                    <br/>
                    <button>Dodaj!</button>

                    <p><font color="red" id="KomunikatERROR3"></font></p>
                    <p><font color="green" id="KomunikatSUCCESS3"></font></p>
                
        
                </form>

                <form onSubmit={this.KlikniecieSubmit4}> 
                    <h4>Miejscowość: </h4>
                    <table border="0">
                    <tr>
                        <td>Nazwa</td>
                    </tr>
                    <tr>
                    <td><input type="text" name="nazwaMiejscowosc" value={this.state.nazwaMiejscowosc} required onChange={this.ZmianaWCzasieRzeczywistynInput4}/></td>                 
                    </tr>
                    </table>
                    <br/>
                    <button>Dodaj!</button>

                    <p><font color="red" id="KomunikatERROR4"></font></p>
                    <p><font color="green" id="KomunikatSUCCESS4"></font></p>
                
        
                </form>


                {/*
                <form onSubmit={this.ZwrocenieTabeliAtrakcja}> 
                    <button>Wczytaj!</button>
                </form>
                */}
            </div>
        );
    }
}

export default DashboardAdmin;