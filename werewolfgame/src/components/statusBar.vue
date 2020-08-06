<template>
    <section>
    <!-- Stats Bars -->
    <div>
        <b-container fluid>
            <div class="row">
                <!-- Stats -->
                <div class="col-2">
                    <b-progress :value="value" :max="100" class="mb-3"></b-progress>
                    <p>Health <br /> 51/100</p>
                </div>
                <div class="col-2">
                    <b-progress :value="value" :max="100" class="mb-3"></b-progress>
                    <p>Sanity <br /> 51/100</p>
                </div>

                <div class="col-2">
                    <b-progress :value="value" :max="100" class="mb-3"></b-progress>
                    <p>Bloodlust <br /> 51/100</p>
                </div>

                <div class="col-2">
                    <b-progress :value="value" :max="100" class="mb-3"></b-progress>
                    <p>Suspicion <br /> 51/100</p>
                </div>

                <!-- Time -->
                <div class="col-2">
                    Time: Morning
                    <br />
                    Day:
                </div>

                <div class="col-2">
                    Waxing Moon
                    <br />
                    Transform in: 3 days
                </div>
            </div>
        </b-container>

    </div>
    </section>
</template>