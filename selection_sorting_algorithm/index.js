function selectionSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      
      if (minIndex !== i) {
        // Swap the elements
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  }
  
  // Example usage:
  const arr = [64, 25, 12, 22, 11];
  selectionSort(arr);
  console.log("Sorted array is:", arr);
  