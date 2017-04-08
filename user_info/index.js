/**
 * Created by qiujian on 2017/4/7.
 */
  var vm=new Vue({
    el:'#user_info',
    data:{
      userData:[],
      uname:'',
      uage:'',
      curIndex:0
    },
    methods:{
      addHandle(){
        this.userData.push({
          name:this.uname,
          age:this.uage
        });
        this.uname='';
        this.uage='';
      },
      delHandle(i){
        this.userData.splice(i,1)
      }
    }
  });