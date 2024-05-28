<script lang="ts">
  import { pricingPlans } from "./pricing_plans"

  // Module context
  export let highlightedPlanId: string = ""
  export let callToAction: string
  export let center = true
</script>

<div
  class="flex flex-col lg:flex-row gap-10 {center
    ? 'place-content-center'
    : ''} flex-wrap"
>
  {#each pricingPlans as plan}
    <div
      class="flex-none card card-bordered {plan.id === highlightedPlanId
        ? 'border-primary'
        : 'border-gray-200'} shadow-xl flex-1 flex-grow min-w-[260px] max-w-[310px] p-6"
    >
      <div class="flex flex-col h-full">
        <div class="text-xl font-bold">{plan.name}</div>
        <p class="mt-2 text-sm text-gray-500 leading-relaxed">
          {plan.description}
        </p>
        <div class="mt-auto pt-4 text-sm text-gray-600">
          Plan Includes:
          <ul class="list-disc list-inside mt-2 space-y-1">
            {#each plan.features as feature}
              <li class="">{feature}</li>
            {/each}
            <ul></ul>
          </ul>
        </div>
        <div class="pt-8">
          <span class="text-4xl font-bold">{plan.price}</span>
          <span class="text-gray-400">{plan.priceIntervalName}</span>
          <div class="mt-6 pt-4 flex-1 flex flex-row items-center">
            {#if plan.id === "free"}
              <a
                href="https://github.com/hotosm/fmtm"
                class="btn btn-primary w-[80%] mx-auto">{callToAction}</a
              >
            {:else}
              <a
                href="mailto:sam.woodcock@hotosm.org"
                class="btn btn-primary w-[80%] mx-auto">{callToAction}</a
              >
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
