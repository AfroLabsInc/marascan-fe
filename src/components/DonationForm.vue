<template>
    <q-card>
        <q-card-section class="q-pa-none">
            <div v-if="showWindow == 1" class="q-pa-md">
                <div class="text-subtitle1 text-grey-7 q-mb-md"><small>Choose payment method</small></div>
                <q-card flat bordered @click="selectType('card')" :class="formData.payment_method == 'card' ? 'active' : ''" class="type-input flex items-center justify-between q-mb-md">
                    <q-card-section class="flex justify-between items-center full-width">
                            <div class="flex justify-center items-center">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <circle cx="19" cy="19" r="18.5" fill="url(#pattern0)" stroke="#EDF1F7"/>
                                <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_651_460" transform="scale(0.0025)"/>
                                </pattern>
                                <image id="image0_651_460" width="400" height="400" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAGNQTFRFAFL/IGj/QH3/UIj/YJL/gKj/n77/v9T/3+n/7/T/////z97/r8n/b57/MHL/EF3/kLP/f6n/X5P/MHP/z9//oL7/cJ7/j7T/j7P/f6j/EFz/YJP/v9P/gKn/T4j/cJ3/sMn/u+USCAAADJtJREFUeJzt3YuWojoQBdAB+yKogEuRpfgY//8rr7TttA+wWz2VqsSzv0CI5FGpVP78ISIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiInKpjOLdLK+3y2mSLA6SZLrc1vnHLi5K7d/2VpoozpeTcZpmWTbqkmVpOp4s611UNto/NmxRsauTYXcrdDfNeLEazCPt3x2kYrBdVA+0xZlqsv2Ya//+oETrZJw+1Rbn38q60H6OIETx8skP47ZR0umO3ddLio/Fi1/GTaMscvZeT4rqPbg1vtpkv2Ln9bByvQF1VJ1tMszZdz2gjBPB1vhqk8WOy8ffKeqhdGscjVccTn4Wo4fxe7LJQPt5bWsGj6zDIcZr9lx9onXluDU+pTUH+C7lymFfddUkSzbJNcXmODYJO65zZa7aHK1sxa/kn/VYuzlaac7dk0+7jXZTnIw5CT5MrRauJ7r37N89ytXUlpqjtX3r0X3nKEjyiGqm/VbUlIn2y++2eNP51kB9qtsnW2u/GwWR0c/jaPJ2H8nO7OdxlH5ovyGnmqX2C/9Z8kbTrcLg5OpWFWu/J1fW1tYePbJa+0050Uy1X/TvTd4guhV50V2djIPfdbc+u7qWBb5uzz0ZPs5std+ZJA9mu7cWwQ4k5UL73T5nE+iy3a/h/FwV5C5JoZLjg5EGuEaMPZteXcqC29yN/ZteXQps+jvwvT0Ca5EP/9tjNApo1+pD+11iBNMiM+03iRJIiwy03yNOEOOI9/OrcwFs7AbVHqPRTvt9vqoIqz1Gmedr9sjjeEm31Ou4VuNtPLHf2OfY70T77UnY+Ls/4uV+1M8S7ff6rFz7zUlZab/Z5wQ24T3n5QIx8noD5D4fp1qNmZODEsb+Dewe5Sc+Y6H9fh8VSMS9n2d5v6FFTG75FUMJcYV+rfJpGAl0RXjJo/XhTvtdueHNaiTkFci51JcwY+Az3m8T7Tf9O2/SYbW8yHoo36TDamU+dFqmCwKgedBpBRzj7WI+CfsdloTnKuvlBYLdlOpj/Ahi9F4d1kFme2vE+SnC9v6v4WazP9hshu1NYa5/wV77nd8Tu3wT6SZZzeJ5dBbka6IintVTmXtH+lge153tEqbJ+qIlLjXRfJY4axTDu4duzh2km7r4zTuI/m7cNEou/mKf1Dioh5xN/j6wOo7yiYM2Sa1Ofdfijz7++3AxmCKXXxkZ3c5thP+M2Wb3VG/dxBPhqZfRT6QWfehs8UKlpLnwEG9ydSj7gSQv5hQUojFPk1tVkh/IHpDiEUum4hv8RASP5lSgpddA7ica/ETEpljZErbwarZio7u5iZbYGmQITUiLpebAqbXlutRG+hb8oM1/Qj/U2oFpmShWKhC4EyrDOcb/0lfIhHllautFe5Efa+sEu8gsfyrVL4tkuprKdxDJVRScuEhsNJvaOhR4QNmiehIF1QwdBRVINZEuOylQAtJQAgp+SE/Fa67P8S1iZ1iHZ1fLt4dEi5g5d9igO2QX7SHQIpmVPgtdMs7V8T141quVzXX0QsvZyST0P2no6offh85WdBg4BU/XjSxFwE81dfnbwdMRG0sR7E7cxu2Px3a3jn98N2zYxPXWG/bXZxaurMKmKzpPlMVu5Fg4dAjthpfuf/8W+fsNrA2hZzzHCksr6OazgVOgc+TjqBR0ga4P9UvSrIBP43TG+w3ZaSk9whlg5F0rRRaZc5nqPMI35DJdrZgLMISiPogAn0VxVQVcHmpPfHGTXs0SbcBxXXviixtCVJ8ElzWjnJ+Fizzo1jCcwz4R5ZK+uMCDcloT7oC9bp053CpEeUWFW9/qHhWB/bHUA9ew5GTVT72EjenqKTSwzrfSXInA6iXrn2NtYMerNPdEYBlyBvY+YWckNT921Ha6hZ022MxX88+FWqfvFZ/hH1RugOYKFzU1MXFkEvW5K1YHQsWtbeQzoQLXihmlEeYJrGT8oebwevNe1CTLSB0E1DxLb5qFukbHwByrVYAeR29EBEWyrBy6Rw2JCrlMX0C7CGbOr4Iic3rPA5r1WjlWgarXordHBQr/6OcyfQFNUvQyTzB9rnqixj+g/U+1SCno9w/VI70nqKxSrXUuKPiunadxpoghtGaNoOQZI8vCAICS5LRTy8IBOqqjvnsbDEy82q9LZU3DBON8vCzeKEwoSzVLIyyYgy6Gr9/wDaZSnpHdqRCwQYzB5JyoJ5GGA7MdwgaBYYMYwy7LGA7qxrBBjOHC0BiGToxhcNEYht+NAW1QWb5t2S+gc5LcwkVhkoMxTAMylgYUXKJcCcqNVZs3BpdKivnk9Q7dM9m6k16ydWjHEUBn2vSOI4R2YAd0Ul3veUI70gY6F613pA1V9t3IoU/UoWK9Q5+oJzBQeqaFKqisl6wcWOEAVBF4vWl8WKU1UMW/NC9rC6r4DKp+pOYWaFDlmVD/Ls3YXEgFzGDVrTWnKCGV+INVvNU8EQYrglmprw1xNwVpfu24MrHq+7iwax50s2jCKaQM+2vpRuaCKTWOuxJed0c6mGL8uOtKP1SfI5TrKnA3umjP4HEXuqh+IrgPRPlCF+Q9n5pXHuGeQjuHJoxLwYB3/2mn/ZUhXJsHKu3X0k+hCeBiSeR1vpXOI5wJ4OpV5H3X+levAsfDEC4n1q81Bb2+e6gQYywDu74beCfjSCWDBnN09YuFFDNULtCR86gvcN4+0p/0tgpknzVKHX/z2F+vHTc5woUdWm6Xhw3s+sJPe6c/vg9qY/1L4vK3QwdAEzvRf7B33Lcc5gQhF1EjK/ll0OvhPzkLoWDnI2YyMOHP5Wp9CF0RtqwcdEEGGD+lTiYrc+gEa6SbQ3oJGQz65KJF4O2hvhXyDRnPOpJvEXx7GIhjnTTAGPyXVHgcifHtUZnpsYA3LX/LRIMoA/SwN7KyCDnCJZ+cEVyPCPyBjIRNTmAZjOemQsH4Bj4JaVkI9H7DD+utjUikMcLGr07sDOmfZB4yFXjKnUT3qp+PdQ2XU3ppCe62GtRR22u6GaS3UDfO3RhC578xfoJ+pFdwpg86oPVPhvtImq3AbPfIShjrGzRX4FIKWpIMQNWLun6igeSGaxJz+5M9oN+KsTubl/TKm/SD5gPdWLzYJDF4b/CSxQ9E9hM5DCWTF5qkWIgNHp8sfiC4Qhu99runhvcm3ss2h4n0uC7AJPIeVf1wwKjI5WYbJyYqg3QQW4ucySb5A3/HKJ8Ifxwte2uQE2wWYO/zD+tfZXdE+Ua6Ez2ytwb5Ryai1SFN1vOod0Rpovk6cdMYI9sXoMgEfXukm2k9iy/a5dAS8aye7p01Rku9CMU9Ivsi92RpOh4ON/uDzWY4TlMHY8alvfY7vwudxegBI9mKfWRXhwb9p/3Gf+Bi6muJpVSTbvD8TNtMj+hHIhkEVtnKbOgmG/W1xWaU95rU9rpB1jbSe4huPVjiQ4fViuS2Sk3xo8NqvUmnpVYs53FSyU+mOD2d+iKB8wnm6JcafgSswrJZvl3hK5Y3Z4XVbdtegS/YfZnxfgMXrTDGrwHkSORUlRFWSjY8JuC4r0crkHPgqjR2eHvhOLRYmx12CgQ8TDLhXM3GwwH9JMQV+9ibkGKX8AK/qZcTrG+hxVB8i5jcCmzya+w0+jOCahFP9mzvkyj0oiSI9ggo8muhTDLEh/abxAimPQ4tEkKvFVB7BDGOeBpQ7OP9XCuw9hApcuiQbMFBHYXHURTpkpw6Im8jjZXn8as+pafReJlKgyZ4uWOVeLz/8aPcv8mWpXK8AoRKUIrJgpvuXhMq0iqkMlUdWYZMGWMZC/NnbCHWngwkmXf5u88qvFiRVEGuBrs1Hsx/k/fork4ES7ZCpIFsDv5eZPqs7iTQYMldA7NLkiyovajfKxOb061JuLGrn+wMTreqALc+fq+prX0k2/eaXN2KhItOP2b/joP5NbE7PR42fuve6szMxKIkzUPe+HhMmatPgdP6fedWXZqVapOky3cfy2+VtVrHlW75dXSJcpUmYWfVrxkMXU+CqzU7q7vihcPBJNsHcCJKXFE7KsZcbd9gxxyijOXDjtlix6HjAeV6I9gm2fCRe3roKFrJ3AOS7VeMWD2pgF+Uk01yDhwvKePlGNR5ZemU4wZEtE7GL34p2XixZkeFVMy2kyc/lWq//WA/JaEsdnXyyFr+8F2sdnN2U7KaKM6Xk2GaZll322TtTWGTZb6LSu5wOHRomN0sr7fLaZIsDpJkutzW+WwXRwxPERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERkVv/A2kuE6Njn2AfAAAAAElFTkSuQmCC"/>
                                </defs>
                                </svg>
                                <span class="q-ml-md" :class="formData.payment_method == 'card' ? 'text-white' : 'text-black'">Card</span>
                            </div>
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6663 3L6.49967 12.1667L2.33301 8" stroke="white" stroke-width="3" stroke-linecap="square"/>
                            </svg>

                    </q-card-section>
                </q-card>

                <q-card flat bordered @click="selectType('crypto')" :class="formData.payment_method == 'crypto' ? 'active' : ''" class="type-input flex items-center justify-between">
                    <q-card-section class="flex justify-between items-center full-width">
                            <div class="flex justify-center items-center">
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <circle cx="19" cy="19" r="18.5" fill="url(#pattern1)" stroke="#EDF1F7"/>
                                <defs>
                                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_651_466" transform="scale(0.0025)"/>
                                </pattern>
                                <image id="image0_651_466" width="400" height="400" xlink:href="data:image/jpeg;base64,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"/>
                                </defs>
                                </svg>
                                <span class="q-ml-md" :class="formData.payment_method == 'crypto' ? 'text-white' : 'text-black'">Crypto</span>
                            </div>
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6663 3L6.49967 12.1667L2.33301 8" stroke="white" stroke-width="3" stroke-linecap="square"/>
                            </svg>
                    </q-card-section>
                </q-card>

                <q-btn @click="showWindow = 2" size="lg" :disable="!formData.payment_method" style="width: 100%;" class="my-btn q-mt-md" label="Continue" no-caps unelevated color="secondary" />
            </div>


            <div v-if="showWindow == 2">
                <div class="row">
                    <div class="col-6">
                        <q-btn square @click="selectType('crypto')" :class="formData.payment_method == 'card' ? 'method-active-right' : ''" class="full-width my-input q-py-lg" unelevated color="white" text-color="black" no-caps label="Crypto" />
                    </div>
                    <div class="col-6">
                        <q-btn square @click="selectType('card')" :class="formData.payment_method == 'crypto' ? 'method-active-left' : ''" class="full-width my-input q-py-lg" unelevated color="white" text-color="black" no-caps label="Card" />
                    </div>
                </div>
                <div class="q-pa-md" v-if="formData.payment_method == 'crypto'">
                    <div class="column text-center q-mb-md relative-position">
                        <div class="text-caption">Amount</div>
                        <div class="text-h4 text-grey-6" v-if="!choseInput" @click="choseInput = true">{{formData.crypto.amount ? formData.crypto.amount : 0}} </div>
                        <div class="text-h4 text-grey-6 flex justify-center" v-if="choseInput">
                            <div class="row">
                                <div><q-input outlined square type="number" style="min-width: 40px; max-width: 100px; " v-model="formData.crypto.amount"/></div>
                                <div><q-btn @click="choseInput = false" label="submit" square unelevated color="primary" class="full-height" /></div>
                            </div>
                        </div>

                        <q-btn-dropdown style="position: absolute; right: 112px; bottom: -29px;" flat text-color="grey-6" color="primary" :label="formData.crypto.curreny">
                            <q-list>
                                <q-item clickable v-close-popup @click="formData.crypto.curreny = 'USD'">
                                <q-item-section>
                                    <q-item-label>USD</q-item-label>
                                </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup @click="formData.crypto.curreny = 'CAD'">
                                <q-item-section>
                                    <q-item-label>CAD</q-item-label>
                                </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    </div>
                    <q-item flat class="q-mb-md q-px-none">
                        <q-item-section>
                            <div class="text-caption text-grey-6">Connected</div>
                            <div class="text-caption">0x051...21e7</div>
                        </q-item-section>
                        <q-item-section avatar>
                            <q-btn-dropdown
                            rounded
                            unelevated
                            outline
                            no-caps
                            class="my-btn"
                            color="black"
                            :label="formData.crypto.ac"
                            >
                            <q-list>
                                <q-item clickable v-close-popup @click="formData.crypto.ac = 'xxx94745'">
                                    xxx94745
                                </q-item>
                            </q-list>
                            </q-btn-dropdown>
                        </q-item-section>
                    </q-item>

                    <div class="row q-col-gutter-md">
                        <div class="col-12 col-md-12 col-lg-12">
                            <div class="q-mb-sm text-grey-6"><small>Conservatory</small></div>
                            <q-select 
                            class="bg-white"
                            outlined
                            v-model="formData.crypto.conservatory" 
                            :options="conservatories" 
                            />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12">
                            <div class="q-mb-sm text-grey-6"><small>Notes</small></div>
                            <q-input
                            type="textarea"
                            class="bg-white"
                            v-model="formData.crypto.notes"
                            outlined
                            />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12">
                            <q-checkbox style="font-size: 12px;" v-model="formData.crypto.terms" label="I would like to cover processing fee and other expenses" />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12">
                            <q-btn v-close-popup size="md" style="width: 100%;" class="my-btn q-mt-md" label="Donate" no-caps unelevated color="secondary" />
                        </div>
                    </div>
                </div>

                <div class="q-pa-md" v-if="formData.payment_method == 'card'">
                    <div class="column text-center q-mb-md relative-position">
                        <div class="text-caption">Amount</div>
                        <div class="text-h4 text-grey-6" v-if="!choseInput" @click="choseInput = true">{{formData.card.amount ? formData.card.amount : 0}} </div>
                        <div class="text-h4 text-grey-6 flex justify-center" v-if="choseInput">
                            <div class="row">
                                <div><q-input outlined square type="number" style="min-width: 40px; max-width: 100px; " v-model="formData.card.amount"/></div>
                                <div><q-btn @click="choseInput = false" label="submit" square unelevated color="primary" class="full-height" /></div>
                            </div>
                        </div>

                        <q-btn-dropdown style="position: absolute; right: 112px; bottom: -29px;" flat text-color="grey-6" color="primary" :label="formData.card.curreny">
                            <q-list>
                                <q-item clickable v-close-popup @click="formData.card.curreny = 'USD'">
                                <q-item-section>
                                    <q-item-label>USD</q-item-label>
                                </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup @click="formData.card.curreny = 'CAD'">
                                <q-item-section>
                                    <q-item-label>CAD</q-item-label>
                                </q-item-section>
                                </q-item>
                            </q-list>
                        </q-btn-dropdown>
                    </div>
                    <div class="row q-col-gutter-md">
                        <div class="col-12 col-md-12 col-lg-12">
                            <div class="q-mb-sm"><small>Cardholder’s Name</small></div>
                            <q-input
                            placeholder="Enter full name on the card"
                            class="bg-white"
                            v-model="formData.card.cardholder_name"
                            outlined
                            />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12">
                            <div class="q-mb-sm"><small>Country</small></div>
                            <q-input
                            placeholder="Please select your country"
                            class="bg-white"
                            v-model="formData.card.country"
                            outlined
                            />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12">
                            <div class="q-mb-sm"><small>Address 1</small></div>
                            <q-input
                            placeholder="Enter address"
                            class="bg-white"
                            v-model="formData.card.address1"
                            outlined
                            />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12">
                            <div class="q-mb-sm"><small>Address 2</small></div>
                            <q-input
                            placeholder="Enter address"
                            class="bg-white"
                            v-model="formData.card.address2"
                            outlined
                            />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12">
                            <div class="q-mb-sm"><small>Post Code</small></div>
                            <q-input
                            placeholder="Please"
                            class="bg-white"
                            v-model="formData.card.postcode"
                            outlined
                            />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12">
                            <div class="q-mb-sm"><small>Credit Card Number</small></div>
                            <q-input
                            placeholder="---- ---- ----"
                            class="bg-white"
                            v-model="formData.card.card_number"
                            outlined
                            />
                        </div>
                        <div class="col-12 col-md-7 col-lg-7">
                            <div class="q-mb-sm"><small>Expiry Date</small></div>
                            <q-input
                            class="bg-white"
                            v-model="formData.card.expiry_date"
                            outlined
                            />
                        </div>
                        <div class="col-12 col-md-5 col-lg-5">
                            <div class="q-mb-sm"><small>CVV</small></div>
                            <q-input
                            class="bg-white"
                            v-model="formData.card.cvv"
                            outlined
                            />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12">
                            <q-checkbox style="font-size: 12px;" v-model="formData.card.terms" label="I would like to cover processing fee and other expenses" />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12">
                            <q-btn v-close-popup size="md" style="width: 100%;" class="my-btn q-mt-md" label="Donate" no-caps unelevated color="secondary" />
                        </div>
                    </div>
                </div>
            </div>

        </q-card-section>
    </q-card>
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { useQuasar } from 'quasar'
    import { useRoute } from 'vue-router';
    
    export default defineComponent({
      setup () {
        const $q = useQuasar()
        const route = useRoute();

        const formData = ref({
            payment_method: '',
            crypto: {
                wallet: '',
                curreny: 'USD',
                amount: '',
                conservatory: '',
                notes: '',
                terms: false,
                ac: 'xxx94745',
            },
            card: {
                amount: null,
                cardholder_name: '',
                curreny: 'USD',
                country: '',
                city: '',
                address1: '',
                address2: '',
                postcode: '',
                card_number: '',
                expiry_date: '',
                cvv: '',
                terms: false,
                ac: 'xxx94745',
            }
        })

        const showWindow = ref(1)

        const conservatories = ref([1, 2, 3, 4, 5])

        const selectType = (type) => {
            if(formData.value.payment_method != type){
                formData.value.payment_method = type
            }
        }

        const choseInput = ref(false)
    
        return {
          route,
          formData,
          showWindow,
          selectType,
          conservatories,
          choseInput
        }
      }
    })
</script>
    
<style>
    .type-input{
        cursor: pointer;
    }
    .type-input.active{
        background: #000;
    }
    .method-active-right{
        border-right: 1px solid #c9c9c9;
        border-bottom: 1px solid #c9c9c9;
    }
    .method-active-left{
        border-left: 1px solid #c9c9c9;
        border-bottom: 1px solid #c9c9c9;
    }
</style>
  