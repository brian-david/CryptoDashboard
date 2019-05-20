
class CC extends React.Component{
   constructor(){
      super();
      this.state = {
          coins : []
      }
  }

  componentWillMount(){
      this._getCoins();
  }

  _getCoins(){
      jQuery.ajax({
          method: "GET",
          url: "https://min-api.cryptocompare.com/data/all/coinlist",
          success: (_coinList) => {
            this.setState({coins: _coinList.Data});
          }
      });
  }

  _renderOptions(){
      this.state.coinNames.sort();
      return this.state.coinNames.map((name) => {
          return <option value={name}>{name}</option>
      });
  }

  render(){
      return(
          <select>
              {this._renderOptions()}
          </select>
      );
  };
}

module.exports = CC;