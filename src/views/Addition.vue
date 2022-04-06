<template>
    <div id="addition">
        <h1 class="addition-title">New Cocktail</h1>
        <form>
            <label>
                <span>カクテル名</span>
                <input id="cocktailName" type="text" required>
            </label>
            <label>
                <span>ベース</span>
                <select name="base-name">
                    <option value="non-alcohol" selected>未選択</option>
                    <option value="gin - ">ジン</option>
                    <option value="rum - ">ラム</option>
                    <option value="beer - ">ビール</option>
                    <option value="vodka - ">ウォッカ</option>
                    <option value="tequila - ">テキーラ</option>
                    <option value="brandy - ">ブランデー</option>
                    <option value="whiskey - ">ウィスキー</option>
                    <option value="wine - ">ワイン</option>
                    <option value="liqueur - ">リキュール</option>             
                </select>
                <select name="base-quantity">
                    <option value="" selected>未選択</option>
                    <option value="30mL">30mL</option>
                    <option value="45mL">45mL</option>
                    <option value="60mL">60mL</option>                    
                </select>
            </label>
            <label>
                <span>割り材</span>
                <select name="mixer-name">
                    <option value="unselected" selected>未選択</option>
                    <option value="milk - ">牛乳</option>
                    <option value="soda - ">炭酸水</option>
                    <option value="oolong - ">烏龍茶</option>
                    <option value="coke - ">コーラ</option>
                    <option value="ginger - ">ジンジャエール</option>
                    <option value="orange - ">オレンジジュース</option>
                    <option value="apple - ">アップルジュース</option>
                    <option value="pine - ">パイナップルジュース</option>
                </select>
                <select name="mixer-quantity">
                    <option value="unselected" selected>未選択</option>
                    <option value="30mL">30mL</option>
                    <option value="45mL">45mL</option>
                    <option value="60mL">60mL</option>
                </select>
            </label>
            <label>
                <span>割り材</span>
                <select name="mixer2-name">
                    <option value="unselected" selected>未選択</option>
                    <option value="milk - ">牛乳</option>
                    <option value="soda - ">炭酸水</option>
                    <option value="oolong - ">烏龍茶</option>
                    <option value="coke - ">コーラ</option>
                    <option value="ginger - ">ジンジャエール</option>
                    <option value="orange - ">オレンジジュース</option>
                    <option value="apple - ">アップルジュース</option>
                    <option value="pine - ">パイナップルジュース</option>
                </select>
                <select name="mixer2-quantity">
                    <option value="unselected" selected>未選択</option>
                    <option value="1/8">1/8</option>
                    <option value="30mL">30mL</option>
                    <option value="45mL">45mL</option>
                    <option value="60mL">60mL</option>
                    <option value="full up">full up</option>
                </select>
            </label>
            <label>
                <button @click="resister()" type="button" class="resister-btn">登録</button>
            </label>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                newCocktail: {
                    cocktailName: "",
                    baseName: "",
                    baseQuantity: 0,
                    mixerName: "",
                    mixerQuantity: 0,
                    mixer2Name: "",
                    mixer2Quantity: 0,
                    mainDetail: false,
                    showMixer: false,
                    showMixer2: false,
                },
            };
        },
        methods: {
            // 登録用ボタン
            resister() {
                
                //追加するカクテルのオブジェクト登録
                this.newCocktail.cocktailName = document.getElementById("cocktailName").value;
                this.newCocktail.baseName = document.querySelector('[name="base-name"]').value;
                this.newCocktail.baseQuantity = document.querySelector('[name="base-quantity"]').value;
                this.newCocktail.mixerName = document.querySelector('[name="mixer-name"]').value;
                this.newCocktail.mixerQuantity = document.querySelector('[name="mixer-quantity"]').value;
                this.newCocktail.mixer2Name = document.querySelector('[name="mixer2-name"]').value;
                this.newCocktail.mixer2Quantity = document.querySelector('[name="mixer2-quantity"]').value;

                // カクテル名が空欄でなければ登録
                this.$store.commit("cocktailResister", this.newCocktail);
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