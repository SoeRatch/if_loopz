import React, { Component } from 'react';



class Lesson10 extends Component {
		

	render() {
		let cl='{';
		let cr='}';
		let lt='<';

		return(
				<div>
					<h1>Searching</h1>
					<p>
								<br/><h3><u>Linear Search</u></h3>
								<br/>Linear search or sequential search is a method for finding a particular value in a list, that consists of checking every one of its elements, one at a time and in sequence, until the desired one is found.
								<br/>
								<br/>Linear search is the simplest search algorithm. For a list with n items, the best case is when the value is equal to the first element of the list, in which case only one comparison is needed. The worst case is when the value is not in the list (or occurs only once at the end of the list), in which case n comparisons are needed.
								
					</p>
					<pre>
						  <code>
						       <p>public class MyLinearSearch {cl}
								<br/>    public static int linerSearch(int[] arr, int key){cl}
								<br/>        int size = arr.length;
								<br/>         for(int i=0;i{lt}size;i++){cl}
								<br/>             if(arr[i] == key){cl}
								<br/>                 return i;
								<br/>             {cr}
								<br/>         {cr}
								<br/>         return -1;
								<br/>    {cr}
								<br/>
								<br/>    public static void main(String a[]){cl}
								<br/>         int[] arr1= {cl}23,45,21,55,234,1,34,90{cr};
								<br/>         int searchKey = 34;
								<br/>          System.out.println("Key "+searchKey+" found at index: "+linerSearch(arr1, searchKey));
								<br/>         int[] arr2= {cl}123,445,421,595,2134,41,304,190{cr};
								<br/>         searchKey = 421;
								<br/>         System.out.println("Key "+searchKey+" found at index: "+linerSearch(arr2, searchKey));
								
								<br/>     {cr}
								<br/>{cr}
								<br/><br/><br/>OUTPUT
								<br/>Key 34 found at index: 6
								<br/>Key 421 found at index: 2
								</p>
						  </code>
					</pre>

					<p>
					    <br/><h3><u>Binary Search</u></h3>
								<br/>Binary search is also used to search a key element from multiple elements but Binary search is faster than linear search.
								<br/>
								<br/>In case of binary search, array elements must be in ascending order. If you have unsorted array, you can sort the array using Arrays.sort(arr) method.
								
					</p>
					<pre>
						  <code>
						       <p>public class BinarySearch {cl}
								<br/>    public static void binarySearch(int arr[], int first, int last, int key){cl}
								<br/>        int mid = (first + last)/2;
								<br/>        while( first {lt}= last ){cl}
								<br/>             if(arr[mid] {lt} key){cl}
								<br/>                  first = mid + 1; 
								<br/>             {cr}else if ( arr[mid] == key ){cl}
								<br/>                    System.out.println("Element is found at index: " + mid);  
								<br/>                    break;
								<br/>             {cr}else{cl}
								<br/>                    last = mid - 1;  
								<br/>             {cr}
								<br/>              mid = (first + last)/2;
								<br/>        {cr}
								<br/>        if ( first > last ){cl}
								<br/>             System.out.println("Element is not found!");  
								<br/>         {cr}
								<br/>    {cr}
								<br/>
								<br/>    public static void main(String a[]){cl}
								<br/>         int[] arr1= {cl}10,20,30,40,50{cr};
								<br/>         int key = 30;
								<br/>         int last=arr.length-1;
								<br/>         binarySearch(arr,0,last,key); 
								<br/>     {cr}
								<br/>{cr}
								<br/><br/><br/>OUTPUT
								<br/>Element is found at index: 2
								
								</p>
						  </code>
					</pre>
				
				</div>

			);
	}

}

export default Lesson10;