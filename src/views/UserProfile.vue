<template>
    <main>
        <div class="formCls">
        <div class="mainDiv">
            <div>
                <!-- displaying profile  picture -->
                <img :src="profile.image" width="100"/>
             </div>
            <!--  displaying profile name  -->
            <div style="text-align:center;">{{profile.name}} Profile</div>
            <div>
                <!-- adding  book button for  bookmentor page  -->
               <div class="btnDiv"><button class="btnBack"> <router-link style="text-decoration: none" :to ="'/bookmentor?id='+profile.id">+ Book </router-link> </button> </div>
               <div class="btnDiv">
                
                <!-- adding  connect button for construction page  -->
                
                <button class="btnConnect"> <router-link style="text-decoration: none" to ="/construction">+ Connect</router-link> </button>
             </div> 
            </div>      
            <div class="lblDiv">
                <span> NAME</span>
                <!-- displaying name of profile  -->
                 <input type="text" disabled v-model="profile.name" />
            </div>
            <div class="lblDiv">
                <span> SUBJECT</span>
                <!-- displaying experience  of user profile --> 
                <input type="text" v-model="profile.subject" disabled />
            </div>
            <div class="lblDiv">
                <span> MY INTERESTS ARE</span>
                <!-- displaying experience  of user profile --> 
                <input type="text" v-model="profile.interested" disabled />
            </div>
            <div class="lblDiv">
                <span> MOTIVATION FOR ROLE</span>
                <!-- displaying interests of user profile  -->
                <input type="text" v-model="profile.motivation"  disabled/>
            </div>
            <div class="lblDiv">
               <span> UNIVERSITY ATTENDED</span>
               <!-- displaying university of user profile -->
                <input type="text" v-model="profile.university" disabled  />
            </div>
            <div class="lblDiv">
                <span> DEGREES</span>
                <!-- displaying  degree of user profile --> 
                <input type="text"  v-model="profile.degree"  disabled/>
            </div>
            <div>  
                <!-- page redirect to find page -->
                <button class="button-21"><router-link style="text-decoration: none" to="/find">Back</router-link></button>
                <!-- page redirect to dashboard page  -->   
                <button class="button-21"><router-link style="text-decoration: none" to="/dashboard">Dashboard</router-link></button> 
            </div>
        </div>
        </div>
    </main>
</template>

<script>
// impoerting json  data from data.json file 
import dataList from '../assets/data/data.json';
export default {
   name:'ProfileComponent',
    data() {
        return {
            profile: {} // profile define with empdlty object
        }
    },
    mounted(){
        // base on profile  id  gettting  data  from data Lists
        this.profile= dataList.list[Number(this.$route.params.id)-1] ;
    },
}
</script>

<style scoped>
#app {
    width: 500px;
    height: 100px;
    position: relative;
    top: 0;
    left: 0;
    right: 100;
    margin:auto;
    
    
}
 .btnDiv {
        display: inline;
    margin: 0.2rem;
    padding: 0.5rem;
 }
 .btnDiv button {
        border-radius: 1rem;
    padding: 0.3rem;
    width: 100px;
    background-color: #ebeef3;
    border: 1px solid #ebeef3;
    box-shadow: 2px 2px #ebeef3;
 }
 input {
    display: block;
    margin: 0.5rem;
        border-radius: 1rem;
   padding: 0.5rem;
    background-color: #d3d3d3;
    border: 1px solid #d3d3d3;
    
}
 .mainDiv {
    width: 250px;
    font-size:150%;

 }
 .lblDiv{
    margin:.5rem;
        font-size: 15px;
    text-align: center;
 }
 .btnBottom {
    width: 100%;
    
    
    
 }
 span {
    padding: 1rem;
 }
 


/* test css */

main {
    font-family: "Monaco", monospace, sans-serif;
    background-image: url('../images/background3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 145vh;
    color: var(--black);
    
}

form {
    display: block;
    border-radius: 1.5rem 1.5rem 0 0;
    background-color: var(--white);
    box-shadow: 0px -4px 12px 4px;
    color: var(--grey);
    padding: 2.5rem 1.5rem;
    text-align: center;
    width: 50%;
    
    
}

 /* label {
    display:block;
    margin: 0;
}

label span {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: var(--black);
} */

input:not([type="submit"]) {
    display: flex;
    width: 400%;
    height: 45px;
    border-radius: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--black);
    background-color: var(--grey);
    margin: 0 auto;
    margin-bottom: 1.5rem;
}

input[type="submit"] {
    padding: 1rem;
    background-color: var(--primary);
    border-radius: 1rem;
}

/* footer {
    background-color: var(--gray);
    font-size: 0.9rem;
    margin: 0;
}  */

.btnConnect a,  .btnBack a {
    text-decoration: none;
    color: #fff !important;
    font-size: 1.1em;
    font-weight: bold;
}
.btnConnect {
    background-color: #C8A2C8 !important;
}
.btnBack {
    background-color: #1976d2 !important;

}
/*  form  with background and box shadow  */
.formCls {
    background-color: white;
    width: 1000px;
    text-align: center;
    padding: 2rem;
    border-radius: 1.5rem;
    box-shadow: 0px -4px 12px 4px white;
}

</style>