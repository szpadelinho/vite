const Child = ({childDataHandler}) => {

    function getDataFromUser(){

    }

    function dataSender(){
        
    }

    return(
        <div>
            <h2>Jakie dane chcesz wysłać do rodzica?</h2>
            <input type="text" value="" onChange={getDataFromUser}/>
            <button onClick={dataSender}>Prześlij dane</button>
        </div>
    )
}

export default Child;