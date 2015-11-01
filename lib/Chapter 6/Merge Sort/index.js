import JSArray from '../../../dist/Chapter 2/Array/un-ordered';

class MergeSort extends JSArray {
  constructor(array) {
    super(array);
  }
  sort(workspace, lower, upper) {
    if (!workspace) this.sort([], 0, this.stack.length - 1);
    else {
      if (lower === upper) return;
      else {
        let mid = Math.floor((lower + upper) / 2);
        // Sort lower bound
        this.sort(workspace, lower, mid);
        // Sort the upper bound
        this.sort(workspace, mid + 1, upper);
        // Merge the upper and the lower
        this.merge(workspace, lower, mid + 1, upper);
      }
    }
  }

  merge(workspace, low, high, upper) {
    let count = 0;
    let lower = low;
    let mid = high - 1;
    // Number of items
    let n = upper - lower + 1;

    // While 'low' is below the mid and 'high' is below the upper
    while (low <= mid && high <= upper)
    // Check if 'low' is less than 'high'
      if (this.stack[low] < this.stack[high])
      // Copy the low
        workspace[count++] = this.stack[low++];
      // Copy the high 
      else workspace[count++] = this.stack[high++];
      // While 'low' is below or equal to the mid
    while (low <= mid)

      workspace[count++] = this.stack[low++];

    while (high <= upper)
      workspace[count++] = this.stack[high++];

    for (count = 0; count < n; count++)
      this.stack[lower + count] = workspace[count];
  }
}

export default MergeSort;