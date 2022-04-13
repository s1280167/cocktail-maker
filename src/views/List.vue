<template>
  <div id="list">
    <h1 class="list-title">Cocktail List</h1>
    <ul>
        <li v-for="(obj,index) in this.$store.state.cocktailStore" :key="obj._id" @click.right="deleteCocktail(index)">
            <button type="button" @click="showDetail(obj)" class="name-btn">{{obj.cocktailName}}</button>
            <br>
            <span v-show="obj.mainDetail" class="thin">
                【 Base 】 {{obj.baseName}}{{obj.baseQuantity}}<br>
                <span v-show="obj.showAlcohol" class="thin">
                    【 Alcohol 】 {{obj.alcoholName}}{{obj.alcoholQuantity}}<br>
                    <span v-show="obj.showMixer" class="thin">
                        【 Mixer 】 {{obj.mixerName}}{{obj.mixerQuantity}}<br>
                    </span>
                </span>
            </span>
        </li>            
    </ul>
  </div>
</template>

<script>
    export default{
        data() {
            return {                
                selected: 0,
                
            };
        },
        methods: {
            showDetail(obj) {
                if(obj.alcoholName != "unselected") {
                    obj.showAlcohol = true;
                }
                if(obj.mixerName != "unselected") {
                    obj.showMixer = true;
                }
                obj.mainDetail = !obj.mainDetail;
            },
            deleteCocktail(selected) {
                this.$store.commit("removeCocktail", selected);
            },
        },
    };
</script>

<style>
    #list{
        position: relative;
        top: 0;
        min-height: 81.75vh;
        height: 100%;
        padding: 10% 25% 0;
        background-image: linear-gradient(#e6f0f0, #a1f4ff, #ffe607);
        background-size: cover;
    }
    .thin{
        font-weight: 500;
    }
    .name-btn{
        min-width: 100px;
        height: auto;
        width: auto;
        padding-right: 250px;
        background: transparent;
        font-size: 25px;
        font-weight: 700;
        margin-top: 25px;
        margin-bottom: 5px;
        border: none;
    }
    /* ---------- モバイル ---------- */
    @media (max-width: 600px) {
        #list{
            padding: 30% 7.5% 0;
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .list-title{
            display: flex;
            justify-content: center;
        }
    }
</style>




