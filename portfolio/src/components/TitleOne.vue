<template>
    <div class="title-block title-block_top" :class="classes">
        <div class="title-block__rectangle">
            <div class="title-block__rectangle-number">{{number}}</div>
        </div>
        <div class="title-block__text-wrapper">
            <h2 class="title-block__text"><slot></slot></h2>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        number: String,
        classes: String
    }
}
</script>

<style lang="scss" scoped>
    $brown: #402A17;

    .title-block {
        display: flex;
        align-items: flex-end;

        &__rectangle {
            width: 55px;
            height: 55px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $brown;

            &-number {
                font-family: 'Montserrat' sans-serif;
                font-size: 30px;
                font-weight: 700;
                color: white;
                letter-spacing: 0.1em;
            }
        }

        &_reverse {
            transform: scale(-1, 1);
        }

        &_reverse &__rectangle-number {
            transform: scale(-1, 1);
        }

        &_reverse &__text {
            transform: scale(-1, 1);
        }

        &__text {
            font-size: 30px;
            font-family: 'Montserrat' sans-serif;
            font-weight: 500;
            transform: translateY(2px);
            color: $brown;
            letter-spacing: -0.01em;

            &-wrapper{
                height: 55px;
                box-sizing: border-box;
                padding-left: 25px;
                display: flex;
                align-items: center;
                border-bottom: 5px solid $brown;
            }
        }

        &_top {
            padding-top: 60px;
        }
    }

    @media (max-width: 1366px) {
        .title-block {
            &__text {
                font-size: 26px;

                &-wrapper {
                    height: 50px;
                    border-width: 4px;
                }
            }

            &__rectangle {
                width: 50px;
                height: 50px;

                &-number {
                    font-size: 27px;
                }            
            }
        }
    }

    @media (max-width: 1024px) {
        .title-block {
            &__text {
                font-size: 22px;

                &-wrapper {
                    height: 45px;
                    border-width: 3.5px;
                    padding-left: 20px;
                }
            }

            &__rectangle {
                width: 45px;
                height: 45px;

                &-number {
                    font-size: 23px;
                }            
            }
        }
    }

    @media (max-width: 650px) {
        .title-block {
            &__text {
                font-size: 17px;

                &-wrapper {
                    height: 41px;
                    border-width: 3px;
                }
            }

            &__rectangle {
                width: 41px;
                height: 41px;

                &-number {
                    font-size: 20px;
                }            
            }
        }

        .title-block_top {
            padding-top: 50px;
        }
    }

    @media (max-width: 576px) {
        .title-block {
            &__text {
                font-size: 16px;

                &-wrapper {
                    height: 37px;
                    padding-left: 15px;
                }
            }

            &__rectangle {
                width: 37px;
                height: 37px;
                
                &-number {
                    font-size: 18px;
                }
            }
        }

        .title-block_top {
            padding-top: 50px;
        }
    }
</style>