<template>
    <v-app theme="dark">
      <v-main>
        <v-container :fluid="false" class="h-full">
            <v-row class="h-full" align-content="center" align="center" justify="center">
                <div class="border border-1 p-5 rounded-md w-96">
                    <slot/>
                </div>
            </v-row>
        </v-container>
      </v-main>
    </v-app>
</template>
