const overlayImages = document.querySelectorAll('.overlay-img');

// 获取容器的宽度
const containerWidth = document.querySelector('.page-cover').offsetWidth;

// 为每个元素添加前后副本，并设置初始 left 值
overlayImages.forEach((img, index) => {
  const cloneAfter = img.cloneNode(true);
  img.parentNode.appendChild(cloneAfter);

  // 设置初始 left 值
  img.style.left = `${index * 100}px`; // 你可以根据需要调整这个值
  cloneAfter.style.left = `${index * 100 + containerWidth}px`;
});

var alllayImages = document.querySelectorAll('.overlay-img');

function animate() {
  alllayImages.forEach((img, index) => {
    // 获取当前的 left 值
    const currentLeft = parseFloat(img.style.left);

    // 计算新的 left 值
    const newLeft = currentLeft + (index % 2 === 0 ? -1 : 1) * img.dataset.speed; // 这里的 -1 和 1 决定了移动的方向和速度

    // 如果达到了阈值，将元素重新定位到另一侧
    if (newLeft < -containerWidth) {
      img.style.left = `${containerWidth}px`;
    } else if (newLeft > containerWidth) {
      img.style.left = `-${containerWidth}px`;
    } else {
      img.style.left = `${newLeft}px`;
    }
  });

  // 请求下一帧
  requestAnimationFrame(animate);
}

// 开始动画
animate();
