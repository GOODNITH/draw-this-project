<button class="next">
    <span class="arrow"></span>
</button> 

<style>
   button {
    position: fixed;
    display: flex;
    left: 95%;
    bottom: 20px;
    cursor: pointer;
    border: 0;
    padding: 0;
  }
  
  button.next {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #282936;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  button.next .arrow {
    position: relative;
    width: 18px;
    height: 2px;
    background: none;
    transition: transform 0.3s ease;
  }
  
  button.next .arrow::before {
    content: "";
    position: absolute;
    top: -5px;
    right: 4px;
    width: 10px;
    height: 10px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(45deg);
  }
  
  button.next:hover .arrow {
    transform: translateX(3px);
  } 
</style>