<template>

    <div id="app" >
        <div class="div1" v-show="statu === 1">
            <p>1.请问您的性别是：</p>
            <input type="radio" class="radio" v-model="value1" value="1"/>男
            <input type="radio" class="radio" v-model="value1" value="2"/>女
            <input type="radio" class="radio" v-model="value1" value="3"/>保密
        </div>

        <div class="div1" v-show="statu === 2">
            <p>2.请选择您的兴趣爱好：</p>
            <input type="checkbox" v-model="value2" value='1'/>看书<br/>
            <input type="checkbox" v-model="value2" value='2'/>游泳<br/>
            <input type="checkbox" v-model="value2" value='3'/>跑步<br/>
            <input type="checkbox" v-model="value2" value='4'/>看电影<br/>
            <input type="checkbox" v-model="value2" value='5'/>听音乐<br/>
        </div>

        <div class="div1" v-show="statu === 3">
            <p>3.请介绍一下自己：</p>
            <textarea type="text" v-model="text1" style="width: 350px;height: 150px"/>{{text1.length}}
        </div>

        <span class="btn1">
            <button :style="btn1" class="btn" :class="btncolor" @click="nextstep" :disabled="disa"> {{btn1text}}</button>
            <button :style="btn1" class="btn btn-info" @click="upstep"  v-show="statu > 1">上一步</button>
            <button :style="btn1" class="btn btn-success" @click="resets">重置</button>
        </span>

    </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return  {
                list1:[{txt:"男",isCheck:false},{txt:"女",isCheck:false},{txt:"保密",isCheck:false}],
                bshow:false,
                btn1:"width:180px",
                statu:1,
                statu2:[0,0,0],
                btn1text:"下一步",
                disa:true,
                value1:"",
                value2:[],
                text1:"",
                btncolor:"btn-secondary"
            }
        },

        methods:{
          resets:function () {
              if(this.statu === 1){this.value1 = ''}
              if(this.statu === 2){this.value2 = []}
              if(this.statu === 3){this.text1 = ''}

          },
            nextstep:function () {
                this.statu += 1;
                if(!this.statu2[this.statu-1]){this.disa = true;console.log("aaa")}
                else if(this.statu2[this.statu-1]){this.disa = false;console.log("bbb")}

            },
            upstep:function () {
                this.statu-=1;
                if(!this.statu2[this.statu-1]){this.disa = true;console.log("ccc")}
                else if(this.statu2[this.statu-1]){this.disa = false;console.log("ddd")}
            }
        },
        watch:{
            statu:function (val,oldVal) {
                if (val > 1 && val < 3){this.btn1 = "width:110px";this.btn1text = "下一步";}
                else if (val === 1){return this.btn1 = "width:180px";this.btn1text = "下一步";}
                else if(val === 3){this.btn1text = "提交";}
            },
            disa:function(val){
                if(val === false){this.btncolor="btn-danger"}
                if(val === true){this.btncolor="btn-secondary"}
            },
            value1:function (val,oldVal) {
                if(val >0){this.disa=false;this.statu2[this.statu-1]=1;  console.log(this.statu-1)
                }
            },
            value2:function (val,oldVal) {
                let lth = this.value2.length;
                if(lth>1 && lth<4){this.disa=false;this.statu2[this.statu-1]=1;console.log(this.statu-1)}
                if(lth>3 || lth<2){this.disa=true;this.statu2[this.statu-1]=0}
            },
            text1:function (val) {
                if(val.length > 99){this.disa=false;this.statu2[this.statu-1]=1}
                else if(val.length <= 99){this.disa=true;this.statu2[this.statu-1]=0}
            }
        }

    }
</script>

<style scoped lang="less">
    @all-width:390px;

    body{text-align: center}
    #app{
        width: @all-width;
        text-align: center;
        margin: 0 auto;
        background-color: aliceblue;
    }

    span{
        display: inline-block;
        text-align: center;
    }

    .radio{
        margin-left: 20px;
    }
    .btn{
        /*<!--width: (@all-width/3)px;-->*/
        /*width: 30%;*/
        margin: 5px ;
    }

    .div1{
        width: @all-width;
        height: 500px;
        padding: 20px;
        text-align: left;
    }


</style>