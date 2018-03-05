/* eslint-disable */
import React, { Component } from 'react';

class Lesson9 extends Component {
		

	render() {
		let cl='{';
		let cr='}';
		let lt='<';
		return(
				<div>
					<h1>Sorting Techniques</h1>
					<p>
								<br/><h2><u>Bubble Sort</u></h2>
								<br/>
								<br/>In bubble sort algorithm, array is traversed from first element to last element. Here, current element is compared with the next element. If current element is greater than the next element, it is swapped.
								
								</p>
					<pre>
						  <code>
						       <p>public class BubbleSortExample {cl}
								<br/>     static void bubbleSort(int[] arr) {cl}
								<br/>         int n = arr.length; 
								<br/>          int temp = 0;
								<br/>          for(int i=0; i {lt} n; i++){cl}
								<br/>              for(int j=1; j {lt} (n-i); j++){cl}
								<br/><br/>                   if(arr[j-1] > arr[j]){cl} 
								                        
								<br/>                        temp = arr[j-1];
								<br/>                        arr[j-1] = arr[j];
								<br/>                         arr[j] = temp; 
								<br/>                    {cr}
								<br/>              {cr}
								<br/>         {cr}
								<br/>     {cr}
								<br/>
								<br/>    public static void main(String[] args) {cl}
								<br/>        int arr[] ={cl}3,60,35,2,45,320,5{cr}; 
								<br/>
								<br/>         System.out.println("Array Before Bubble Sort");  
								<br/>         for(int i=0; i {lt} arr.length; i++){cl}
								<br/>              System.out.print(arr[i] + " ");
								<br/>         {cr}
								<br/>          System.out.println(); 
								<br/>
								<br/>          bubbleSort(arr);
								<br/>
								<br/>          System.out.println("Array After Bubble Sort");
								<br/>           for(int i=0; i {lt} arr.length; i++){cl}
								<br/>               System.out.print(arr[i] + " ");
								<br/>           {cr}
								<br/>
								<br/>     {cr}
								<br/>{cr}
								<br/><br/><br/>OUTPUT:
								<br/>Array Before Bubble Sort
								<br/>3 60 35 2 45 320 5 
								<br/>Array After Bubble Sort
								<br/>2 3 5 35 45 60 320 
								</p>
						  </code>
					</pre>

					<p>
								<br/><h2><u>Selection Sort</u></h2>
								<br/>
								<br/>The selection sort is a combination of searching and sorting. 
								<br/>
								<br/>During each pass, the unsorted element with the smallest (or largest) value is moved to its proper position in the array. The number of times the sort passes through the array is one less than the number of items in the array.
								<br/>
								<br/> In the selection sort, the inner loop finds the next smallest (or largest) value and the outer loop places that value into its proper location.
  								<br/>

								</p>
					<pre>
						  <code>
						       <p>public class SelectionSortExample {cl}
								<br/>     public static int[] doSelectionSort(int[] arr) {cl}
								
								<br/>          for(int i=0; i {lt} arr.length - 1; i++)
								<br/>          {cl}
								<br/>              int index = i;
								<br/>              for(int j=i + 1; j {lt} arr.length; j++)
								<br/>                   if(arr[j] {lt} arr[index]) 
								<br/>                        index = j;
								<br/>  
								<br/>              int smallerNumber = arr[index];
								<br/>              arr[index] = arr[i];
								<br/>              arr[i] = smallerNumber; 
								<br/>          {cr}
								<br/>          return arr;
								<br/>      {cr}
								<br/>
								<br/>    public static void main(String[] args) {cl}
								<br/>        int[] arr1 = {cl}10,34,2,56,7,67,88,42{cr};
								<br/>        int[] arr2 = doSelectionSort(arr1);  
								<br/>
								<br/>         for(int i:arr2){cl} 
								<br/>             System.out.print(i);
								<br/>             System.out.print(", ");
								<br/>         {cr}
								<br/>    {cr}
								<br/>{cr}
								<br/><br/><br/>OUTPUT:
								<br/>2, 7, 10, 34, 42, 56, 67, 88, 
								</p>
						  </code>
					</pre>


					<p>
								<br/><h2><u>Quick Sort</u></h2>
								<br/>
								<br/>QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.
								<br/>
								<br/>The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.
								<br/>
								<br/><b>Pseudo Code for recursive QuickSort function :</b>

								</p>
					<pre>
						  <code>
						       <p>/* low  --> Starting index,  high  --> Ending index */
								<br/>quickSort(arr[], low, high) 
								
								<br/>{cl}
								<br/>    if (low {lt} high)
								<br/>    {cl}
								<br/>          /* pi is partitioning index, arr[pi] is now at right place */
								<br/>           pi = partition(arr, low, high);
								<br/>
								<br/>           quickSort(arr, low, pi - 1);  // Before pi
								<br/>            quickSort(arr, pi + 1, high); // After pi
								<br/>              
								<br/>    {cr}
								<br/>{cr}
								</p>
						  </code>
					</pre>

					<p>
					    <b>Pseudo Code for partition(): </b>
                    </p>
					<pre>
						  <code>
						       <p>/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
								<br/>partition(arr[], low, high)
								<br/>{cl}
								<br/>    // pivot (Element to be placed at right position)
								<br/>    pivot = arr[high]; 
								<br/>
								<br/>    i = (low - 1)      // Index of smaller element
								<br/>    
								<br/>    for (j = low; j {lt}= high- 1; j++)
								<br/>    {cl}
								<br/>         // If current element is smaller than or equal to pivot
								<br/>         if (arr[j] {lt}= pivot)
								<br/>         {cl}
								<br/>              i++;        // increment index of smaller element
								<br/>              swap arr[i] and arr[j]
								<br/>         {cr}
								<br/>    {cr}
								<br/>     swap arr([i + 1] and arr[high])
								<br/>     return (i + 1)         
								
								<br/>{cr}
								</p>
						  </code>
					</pre>


					<p><b>Implementation:</b>
								
								</p>
					<pre>
						  <code>
						       <p>class QuickSort
								<br/>{cl}
								<br/>     int partition(int arr[], int low, int high)
								<br/>     {cl}
								<br/>           int pivot = arr[high]; 
								<br/>           int i = (low-1);
								<br/>           for (int j=low; j{lt}high; j++)
								<br/>           {cl}
								<br/>                  if (arr[j] {lt}= pivot)
								<br/>                  {cl}
								<br/>                        i++;
								<br/>
								<br/>                        int temp = arr[i];
								<br/>                        arr[i] = arr[j];
								<br/>                        arr[j] = temp;
								<br/>                   {cr}
								<br/>           {cr}
								<br/>
								<br/>            int temp = arr[i+1];
								<br/>            arr[i+1] = arr[high];
								<br/>            arr[high] = temp;
								<br/>
								<br/>            return i+1;
								<br/>     {cr}
								<br/>
								<br/>     void sort(int arr[], int low, int high)
								<br/>     {cl}
								<br/>            if (low {lt} high)
								<br/>            {cl}
								<br/>                  int pi = partition(arr, low, high);      
								<br/>
								<br/>                  sort(arr, low, pi-1);
								<br/>

								<br/>                  sort(arr, pi+1, high);
								<br/>             {cr}
								<br/>     {cr}
								<br/>
								<br/>     static void printArray(int arr[])
								<br/>     {cl}
								<br/>            int n = arr.length;
								<br/>            for (int i=0; i{lt}n; ++i)
								<br/>                 System.out.print(arr[i]+" ");
								<br/>            System.out.println();
								<br/>     {cr}
								<br/>
								<br/>     public static void main(String args[])
								<br/>     {cl}
								<br/>           int arr[] = {cl}10, 7, 8, 9, 1, 5{cr};
								<br/>           int n = arr.length;
								<br/>
								<br/>           QuickSort ob = new QuickSort();
								<br/>           ob.sort(arr, 0, n-1);
								<br/>
								<br/>           System.out.println("sorted array");
								<br/>           printArray(arr);
								<br/>     {cr}
								<br/>{cr}
								<br/>
								<br/>
								<br/>
								<br/>OUTPUT
								<br/>Sorted array:
								<br/>1 5 7 8 9 10
								</p>
						  </code>
					</pre>
					<p>
								<br/><h2><u>Merge Sort</u></h2>
								<br/>
								<br/>Merge Sort is also a Divide and Conquer algorithm.It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.
								<br/>
								<br/>The merge() function is used for merging two halves. The   merge(arr, l, m, r)   is key process that assumes that   arr[l..m]   and   arr[m+1..r]   are sorted and merges the two sorted sub-arrays into one.
								
								</p>
					<pre>
						  <code>
						       <p>MergeSort(arr[], l,  r)
								<br/>If r > l
								<br/>     1. Find the middle point to divide the array into two halves:
								<br/>              middle m = (l+r)/2
								<br/>     2. Call mergeSort for first half:
								<br/>              Call mergeSort(arr, l, m)
								<br/>     3. Call mergeSort for second half:
								<br/>              Call mergeSort(arr, m+1, r)
								<br/>     4. Merge the two halves sorted in step 2 and 3:
								<br/>              Call merge(arr, l, m, r)
								</p>
						  </code>
					</pre>

					

					<p><b>Implementation:</b>
								
								</p>
					<pre>
						  <code>
						       <p>class MergeSort
								<br/>{cl}
								<br/>      void merge(int arr[], int l, int m, int r)
								<br/>     {cl}
								<br/>           int n1 = m - l + 1;
								<br/>           int n2 = r - m;
								<br/>           
								<br/>           int L[] = new int [n1];
								<br/>           int R[] = new int [n2];
								<br/>                  
								<br/>           for (int i=0; i{lt}n1; ++i)
								<br/>               L[i] = arr[l + i];
								<br/>           for (int j=0; j{lt}n2; ++j)
								<br/>               R[j] = arr[m + 1+ j];
								<br/>            
								<br/>           int i = 0, j = 0; 
								<br/>           int k = l;
								<br/>
								<br/>           while (i {lt} n1 && j {lt} n2)
								<br/>           {cl}
								<br/>                if (L[i] {lt}= R[j])
								<br/>                 {cl}
								<br/>                       arr[k] = L[i];
								<br/>                       i++;
								<br/>                 {cr}
								<br/>                else
								<br/>                {cl}
								<br/>                       arr[k] = R[j];
								<br/>                       j++;
								<br/>                {cr}
								<br/>                k++;
								<br/>          {cr}
								<br/>
								<br/>           while (i {lt} n1)
								<br/>           {cl}
								<br/>                 arr[k] = L[i];
								<br/>                 i++;
								<br/>                 k++;
								<br/>           {cr}
								<br/>
								<br/>           while (j {lt} n2)
								<br/>           {cl}
								<br/>                 arr[k] = R[j];
								<br/>                 j++;
								<br/>                 k++;
								<br/>           {cr}
								<br/>     {cr}
								<br/>               
								<br/>                
								<br/>     void sort(int arr[], int l, int r)
								<br/>     {cl}
								<br/>           if (l {lt} r)
								<br/>           {cl}
								<br/>                  int m = (l+r)/2;
								<br/>
								<br/>                  sort(arr, l, m);
								<br/>                  sort(arr , m+1, r);
                                <br/>
								<br/>                  merge(arr, l, m, r);
								<br/>           {cr}
								<br/>    {cr}
								<br/>
								<br/>     static void printArray(int arr[])
								<br/>     {cl}
								<br/>            int n = arr.length;
								<br/>            for (int i=0; i{lt}n; ++i)
								<br/>                 System.out.print(arr[i]+" ");
								<br/>            System.out.println();
								<br/>     {cr}
								<br/>
								<br/>     public static void main(String args[])
								<br/>     {cl}
								<br/>           int arr[] = {cl}12, 11, 13, 5, 6, 7{cr};
								
								<br/>
								<br/>           System.out.println("Given Array");
								<br/>           printArray(arr);
								<br/>
								<br/>           MergeSort ob = new MergeSort();
								<br/>           ob.sort(arr, 0, arr.length-1);
								<br/>
								<br/>           System.out.println("\nsorted array");
								<br/>           printArray(arr);
								<br/>     {cr}
								<br/>{cr}
								<br/>
								<br/>
								<br/>
								<br/>OUTPUT
								<br/>Given array is
								<br/>12 11 13 5 6 7
								<br/>
								<br/>Sorted array:
								<br/>5 6 7 11 12 13
								</p>
						  </code>
					</pre>				
								<p><br/><h2><u>Heap Sort</u></h2>
								<br/>
								<br/>Heap sort is a comparison based sorting technique based on Binary Heap data structure. 
								<br/>
								<br/><b>Binary Heap :</b>
								<br/>Let us first define a Complete Binary Tree. A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.
								<br/><br/>A <u>Binary Heap</u> is a Complete Binary Tree where items are stored in a special order such that value in a parent node is greater(or smaller) than the values in its two children nodes. The former is called as max heap and the latter is called min heap. The heap can be represented by binary tree or array.
								<br/><br/> Array based representation of Binary Heap is space efficient.  If the parent node is stored at index I, the left child can be calculated by 2 * I + 1 and right child by 2 * I + 2
								<br/><b>Heap Sort Algorithm for sorting in increasing order:</b>
								<ol>
									<li>Build a max heap from the input data.</li><br/>
                                    <li>At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of heap by 1. Finally, heapify the root of tree.</li><br/>
                                    <li>Repeat above steps while size of heap is greater than 1.</li><br/>
                                </ol>
								<br/><br/><b>Implementation:</b>
								<br/>Heapify procedure can be applied to a node only if its children nodes are heapified. So the heapification must be performed in the bottom up order.
								</p>
					<pre>
						  <code>
						       <p>public class HeapSort
								<br/>{cl}
								<br/>      public void sort(int arr[])
								<br/>     {cl}
								<br/>           int n = arr.length;
								<br/>           
								<br/>           // Build heap (rearrange array)
								<br/>           for (int i = n / 2 - 1; i >= 0; i--)
								<br/>               heapify(arr, n, i);
								<br/>
								<br/>           // One by one extract an element from heap       
								<br/>           for (int i=n-1; i>=0; i--)
								<br/>           {cl}
								<br/>               // Move current root to end
								<br/>               int temp = arr[0];
								<br/>               arr[0] = arr[i];
								<br/>               arr[i] = temp; 
								<br/>           
								<br/>               // call max heapify on the reduced heap
								<br/>               heapify(arr, i, 0);
								<br/>           {cl}
								<br/>    {cl}
								<br/>                       
								<br/>     // To heapify a subtree rooted with node i which is an index in arr[]. n is size of heap         
								<br/>      void heapify(int arr[], int n, int i)
								<br/>      {cl}
								<br/>          int largest = i;  // Initialize largest as root
								<br/>          int l = 2*i + 1;  // left = 2*i + 1
								<br/>          int r = 2*i + 2;  // right = 2*i + 2
								<br/>          
								<br/>          // If left child is larger than root
								<br/>          if (l {lt} n && arr[l] > arr[largest])
								<br/>              largest = l;
								<br/>           
								<br/>          // If right child is larger than largest so far
								<br/>          if (r {lt} n && arr[r] > arr[largest])
								<br/>                largest = r;
								<br/>           
								<br/>          // If largest is not root
								<br/>          if (largest != i)
								<br/>          {cl}
								<br/>                int swap = arr[i];
								<br/>                arr[i] = arr[largest];
								<br/>                arr[largest] = swap;
								<br/>
								<br/>                // Recursively heapify the affected sub-tree
								<br/>                heapify(arr, n, largest);
								<br/>          {cr}
								<br/>     {cr}
								<br/>
								<br/>     static void printArray(int arr[])
								<br/>     {cl}
								<br/>            int n = arr.length;
								<br/>            for (int i=0; i{lt}n; ++i)
								<br/>                 System.out.print(arr[i]+" ");
								<br/>            System.out.println();
								<br/>     {cr}
								<br/>
								<br/>     public static void main(String args[])
								<br/>     {cl}
								<br/>           int arr[] = {cl}12, 11, 13, 5, 6, 7{cr};
								
								<br/>           int n = arr.length;
								
								<br/>
								<br/>           HeapSort ob = new HeapSort();
								<br/>           ob.sort(arr);
								<br/>
								<br/>           System.out.println("\nsorted array");
								<br/>           printArray(arr);
								<br/>     {cr}
								<br/>{cr}
								<br/>
								<br/>
								<br/>
								<br/>OUTPUT
								
								<br/>Sorted array:
								<br/>5 6 7 11 12 13
								</p>
						  </code>
					</pre>				

				
				</div>

			);
	}

}



export default Lesson9;