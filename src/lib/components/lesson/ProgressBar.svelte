<script lang="ts">
  export let docHeight:number;

  const handleOverfill = (percentFill: number) => {
    while (percentFill > 100) {
      percentFill = 100;
    }
    return percentFill;
  };

  const barWidth = 748;
  const fillWidth = (handleOverfill(docHeight) / 100) * barWidth;
</script>

<div class="prog-bar">
  <div class="inner-bar" style="width: {fillWidth}px;"></div>
</div>

<style>
  .prog-bar {
    border: 2.54px solid #d7d7d7;
    border-radius: 15.23px;
    width: 748px;
    height: 33px;
    position: relative;
    background-color: transparent;
    box-sizing: border-box;
  }

  .inner-bar {
    height: 30.46px;
    background-color: #007bff;
    position: absolute;
    top: 50%;
    left: 1.89305px;
    transform: translateY(-50%);
    border-radius: 15.23px;
    transition: width 0.3s ease;
  }
</style>
