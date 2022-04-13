<template>
    <label>
        <span>アルコール</span>
        <select name="alcohol-name" @change="showBase()">
            <option value="non-alcohol" selected>未選択</option>
            <option value="gin - ">ジン</option>
            <option value="rum - ">ラム</option>
            <option value="beer - ">ビール</option>
            <option value="wine - ">ワイン</option>
            <option value="vodka - ">ウォッカ</option>
            <option value="tequila - ">テキーラ</option>
            <option value="brandy - ">ブランデー</option>
            <option value="whiskey - ">ウィスキー</option>
            <option value="liqueur - ">リキュール</option>       
        </select>
        <select name="alc-liqueur" v-show="liqueur">
            <option value="unselected" selected>未選択</option>
            <option value="malibu">マリブ</option>
            <option value="peach">ピーチ</option>
            <option value="cassis">カシス</option>
            <option value="amaretto">アマレット</option>
        </select>
        <select name="alc-wine" v-show="wine">
            <option value="unselected" selected>未選択</option>
            <option value="vermouth - ">ベルモット</option>
        </select>
        <select name="alcohol-quantity" @change="showMoreQuantity()">
            <option value="unselected" selected>未選択</option>
            <option value="30mL">30mL</option>
            <option value="45mL">45mL</option>
            <option value="60mL">60mL</option>
            <option value="other">その他</option>
        </select>
        <input id="alcohol-quantity" v-show="moreQuantity" class="hide-input" type="text" required>
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
                if(document.querySelector('[name="alcohol-name"]').value == "liqueur - ") {
                    this.liqueur = true;
                }else{
                    this.liqueur = false;
                }
            },
            showWine() {
                if(document.querySelector('[name="alcohol-name"]').value == "wine - ") {
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
                if(document.querySelector('[name="alcohol-quantity"]').value == "other") {
                    this.moreQuantity = true;
                }else{
                    this.moreQuantity = false;
                }
            },
        },
    };
</script>

<style scoped>

</style>