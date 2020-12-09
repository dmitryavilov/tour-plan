 <template>
     <div class="container" :class="anClass">
         <slot></slot>
     </div>
 </template>

 <script>
     export default {
         props: {
             anClass: String
         }
     }
 </script>

 <style lang="scss">
     .container {
         max-width: 1036px;
         margin: 0 auto;
         width: 96%;
     }

     @media (max-width: 1200px) {
         .container_def {
             max-width: 768px;
         }
     }

     @media (max-width: 870px) {
         .container_def {
             max-width: 690px;
         }
     }

     @media (max-width: 768px) {
         .container_def {
             max-width: 576px;
         }
     }

     @media (max-width: 650px) {
         .container_def {
             max-width: 480px;
         }
     }
 </style>