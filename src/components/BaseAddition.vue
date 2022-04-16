<template>
    <label>
        <span>アルコール（ベース）</span>
        <select name="base-name" @change="showBase(); changeShowAlcohol()">
            <option value="non-alcohol" selected>未選択</option>
            <option value="gin - ">ジン</option>
            <option value="rum - ">ラム</option>
            <option value="wine - ">ワイン</option>
            <option value="beer - ">ビール</option>
            <option value="vodka - ">ウォッカ</option>
            <option value="tequila - ">テキーラ</option>
            <option value="brandy - ">ブランデー</option>
            <option value="whiskey - ">ウィスキー</option>
            <option value="liqueur - ">リキュール</option>       
        </select>
        <select name="base-liqueur" v-show="liqueur">
            <option value="unselected" selected>未選択</option>
            <option value="malibu">malibu - </option>
            <option value="peach">ピーチ</option>
            <option value="cassis">カシス</option>
            <option value="apple">アップル</option>
            <option value="amaretto">アマレット</option>
        </select> 
        <select name="base-wine" v-show="wine">
            <option value="unselected" selected>未選択</option>
            <option value="vermouth - ">ベルモット</option>
        </select>
        <select name="base-quantity" @change="showMoreQuantity(); changeShowAlcohol()">
            <option value="unselected" selected>未選択</option>
            <option value="30mL">30mL</option>
            <option value="45mL">45mL</option>
            <option value="60mL">60mL</option>
            <option value="other">その他</option>
        </select>
        <input id="base-quantity" v-show="moreQuantity" class="hide-input" type="text" required>
    </label>    
</template>

<script>
    export default{
        data(){
            return{
                liqueur: false,
                wine: false,
                moreQuantity: false, 
            };
        },
        methods: {
            showLiqueur() {
                if(document.querySelector('[name="base-name"]').value == "liqueur - ") {
                    this.liqueur = true;
                }else{
                    this.liqueur = false;
                }
            },
            showWine() {
                if(document.querySelector('[name="base-name"]').value == "wine - ") {
                    this.wine = true;
                }else{
                    this.wine = false;
                }
            },
            showBase() {
                this.showLiqueur();
                this.showWine();
            },
            showMoreQuantity() {
                if(document.querySelector('[name="base-quantity"]').value == "other") {
                    this.moreQuantity = true;
                }else{
                    this.moreQuantity = false;
                }
            },

            changeShowAlcohol(){
                if(document.querySelector('[name="base-name"]').value != "non-alcohol" && document.querySelector('[name="base-quantity"]').value != "unselected") {
                   this.$store.state.showInput.alcohol = true;
                }else{
                    this.$store.state.showInput.alcohol = false;
                }
            }
        },
    };
</script>

<style scoped>

</style>