class Calculator{
	//default constructor
  constructor(){
      this.lastNum = 0;
      this.slot = [];
      this.results = 1;
  }
  //accessor and mutator methods
  set_slot(number){
      this.slot[number] = this.lastNum;
  }
  get_slot(number){
      return this.slot[number];
  }
  
  //method for adding numbers
  add(){
      var sum = 0;
      var n = arguments.length;
      for(let i = 0; i<n; i++){
          sum += arguments[i];
      }
      this.lastNum = sum;
      return sum;
  }
  
  //method for muiltiplying numbers
  multiply(){
      var n = arguments.length;
      for(let i = 0; i< n; i++){
         this.results =this.results * arguments[i];
      }
      this.lastNum = this.results;
      return this.results;
  }
  
  //method for returning last
  last(){
      return this.lastNum;
  }
  
};
