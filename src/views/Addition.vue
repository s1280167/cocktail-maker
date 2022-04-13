<template>
    <div id="addition">
        <h1 class="addition-title">New Cocktail</h1>
        <form>
            <label>
                <span>カクテル名</span>
                <input id="cocktailName" type="text" required>
            </label>
            <BaseAddition />
            <AlcoholAddition />
            <MixerAddition />
            <label>
                <span>署名</span>
                <input id="signature" type="text">
            </label>
            <label>
                <button @click="resister()" type="button" class="resister-btn">登録</button>
            </label>
        </form>
    </div>
</template>

<script>

    import BaseAddition from "../components/BaseAddition.vue";
    import AlcoholAddition from "../components/AlcoholAddition.vue";
    import MixerAddition from "../components/MixerAddition.vue";
    
    export default {
        components: {
            BaseAddition,
            AlcoholAddition,
            MixerAddition,
        },
        data() {
            return{
                newCocktail: {
                    cocktailName: "",
                    baseName: "",
                    baseQuantity: 0,
                    alcoholName: "",
                    alcoholQuantity: 0,
                    mixerName: "",
                    mixerQuantity: 0,
                    signature:"anonymous",
                    mainDetail: false,
                    showAlcohol: false,
                    showMixer: false,
                },
            };
        },
        methods: {

        // resister the new cocktail's object
            resister() {
            
            // resister a cocktail name
                this.newCocktail.cocktailName = document.getElementById("cocktailName").value;
                
            // resister base information  
             
                // resister base name
                if(document.querySelector('[name="base-name"]').value == "liqueur - ") {
                    this.newCocktail.baseName = document.querySelector('[name="base-liqueur"]').value;
                }else if(document.querySelector('[name="base-name"]').value == "wine - "){
                    this.newCocktail.baseName = document.querySelector('[name="base-wine"]').value;
                }else{
                    this.newCocktail.baseName = document.querySelector('[name="base-name"]').value;
                }

                // resister base quantity
                if(document.querySelector('[name="base-quantity"]').value == "other"){
                    this.newCocktail.baseQuantity = document.getElementById("base-quantity").value;
                }else{
                    this.newCocktail.baseQuantity = document.querySelector('[name="base-quantity"]').value;
                }
                
            // resister another alcohol information
                
                // resister another alcohol name
                if(document.querySelector('[name="alcohol-name"]').value == "liqueur - ") {
                    this.newCocktail.alcoholName = document.querySelector('[name="alc-liqueur"]').value;
                }else if(document.querySelector('[name="alcohol-name"]').value == "wine - "){
                    this.newCocktail.alcoholName = document.querySelector('[name="alc-wine"]').value;
                }else{
                    this.newCocktail.alcoholName = document.querySelector('[name="alcohol-name"]').value;
                }

                // resister another alcohol name
                if(document.querySelector('[name="alcohol-quantity"]').value == "other"){
                    this.newCocktail.alcoholQuantity = document.getElementById("alcohol-quantity").value;
                }else{
                    this.newCocktail.alcoholQuantity = document.querySelector('[name="alcohol-quantity"]').value;
                }

            // resister mixer information
                
                // resister mixer name
                this.newCocktail.mixerName = document.querySelector('[name="mixer-name"]').value;

                // resister mixer quantity
                if(document.querySelector('[name="mixer-quantity"]').value == "other"){
                    this.newCocktail.mixerQuantity = document.getElementById("mixer-quantity").value;
                }else{
                    this.newCocktail.mixerQuantity = document.querySelector('[name="mixer-quantity"]').value;
                }

            // resister signature
                this.newCocktail.signature = document.getElementById("signature").value;

            // resister cocktail when the cocktail name is not empty
                this.$store.commit("cocktailResister", this.newCocktail);
                console.log(this.newCocktail.signature);
            },
        },
    };
</script>

<style>
    #addition{
        position: relative;
        top: 0;
        min-height: 81.75vh;
        height: 100%;
        padding: 10% 25% 0;
        background-image: linear-gradient(#e6f0f0, #7fd9d2, #ff9ed6);
        background-size: cover;
    }
    form{
        display: flex;
        flex-direction: column;
        margin-top: 100px;
    }
    label{
        width: 75%;
        display: flex;
        align-self: center;
        justify-content: space-between;
    }
    label:not(:last-child){
        margin-bottom: 20px;
    }
    label:last-child{
        margin: 100px auto 0;
        width: auto;
    }
    span{
        width: 220px;
        color: #474a4d;
        font-weight: 600;
        padding-right: 20px;
        align-self: center;
        justify-content: space-between;
    }
    span-textarea{
        display: flex;
        width: 220px;
        justify-content: space-between;
        align-self: flex-start;
        padding-top: 20px;
        padding-right: 20px;
    }
    .addition-title{
        color: #474a4d;
    }
    #name{
        width: 250px;
    }
    .hide-input{
        width: 50px;
    }
    .resister-btn{
        margin: 0;
        padding: 0;
        width: 500px;
        background-color: orange;
        color: #ffffff;
        font-size: 25px;
    }

    /* ---------- モバイル ---------- */
    @media (max-width: 600px) {
        #addition{
            padding: 30% 7.5% 0;
        }
        form{
            width: 100%;
            margin-top: 50px;
        }
        label{
            width: 50%;
            flex-direction: column;
        }
        label:not(:last-child){
            margin-bottom: 20px;
        }
        label:last-child{
            margin: 40px auto 0;
            width: auto;
        }
        .addition-title{
            display: flex;
            justify-content: center;
        }
        .resister-btn{
            margin: 0;
            padding: 0;
            width: 250px;
            background-color: orange;
            color: #ffffff;
            font-size: 25px;
        }
    }
</style>