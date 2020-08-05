<template>
    <section>
    <!-- Stats Bars -->
    <div>
        <b-progress :value="value" :max="100" class="mb-3"></b-progress>
        <h5>Health <br /> 51/100</h5>

        <b-progress :value="value" :max="100" class="mb-3"></b-progress>
        <h5>Sanity <br /> 51/100</h5>

        <b-progress :value="value" :max="100" class="mb-3"></b-progress>
        <h5>Bloodlust <br /> 51/100</h5>

        <b-progress :value="value" :max="100" class="mb-3"></b-progress>
        <h5>Suspicion <br /> 51/100</h5>
    </div>

    <!-- Time Info -->
    <div>

        <h5>Time: Morning</h5>
        <h5>Waxing Moon</h5>
        <h5>Transform in: 3 days</h5>
    </div>
    </section>
</template>