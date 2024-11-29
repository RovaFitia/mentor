<template>
    <div class="container mx-auto stack-3 mt-10">
        <Heading tag="h1" size="4" variant="dark">Heading 1</Heading>
        <Heading tag="h2" size="3" variant="dark">Heading 2</Heading>
        <Heading tag="h3" size="2" variant="dark">Heading 3</Heading>

        <p class="text-carbon font-base font-500 text-base">Paragraph</p>

        <a href="#" class=" text-medium-gray font-base font-500 text-base">Link</a>

        <div class="flex gap-3">
            <Button icon="i-ri-home-5-line" variant="light-gray">Sign up</Button>

        </div>

    </div>
</template>
<script setup lang="ts">
import Button from "./components/Button.vue";
import Heading from "./components/Heading.vue";

</script>
