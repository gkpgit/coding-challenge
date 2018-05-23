package com.parcel.point.challenge;



import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import com.parcelpoint.challenge.Robot;
@RunWith(value = Parameterized.class)
public class TestParcelPoint {

	

	/*

	Robot robot = new Robot();

	   
	   @Test
	   public void testSimulateArm() {	
	      System.out.println("Inside testSimulateArm()");  
	      Map<String,List<String>> expectedOutputMap = new HashMap<String,List<String>>();
ArrayList<String> outputList = new ArrayList<String>();
outputList.add("foo");
	      expectedOutputMap.put("A",outputList);
	      outputList = new ArrayList<String>();
	      outputList.add("Foo");
	      outputList.add("World");
	      expectedOutputMap.put("B",outputList);
	      outputList = new ArrayList<String>();
	    
	      expectedOutputMap.put("C",outputList);
	      expectedOutputMap.put("E",outputList);
	      outputList = new ArrayList<String>();
	      outputList.add("bar");
	      outputList.add("hello");
	      expectedOutputMap.put("D",outputList);
	     
	      Map<String,List<String>> actualoutputMap =    robot.simulateArm("FD{foo}FFD{bar}RFFD{Foo}RFFD{World}D{}DA{hello}");
	      
	      Assert.assertTrue(actualoutputMap.equals(expectedOutputMap));
	      
	     
	      
	   }*/
	



	    private String input;
	
	    private Map<String,List<String>> expectedMap;
	    Robot robot = new Robot();

	    public TestParcelPoint(String input, Map<String,List<String>> expectedMap) {
	        this.input = input;
	        this.expectedMap = expectedMap;
	      
	    }

	
	    @Parameters(name = "MapTest")
	    public static Collection<Object[]> data() {
	    	  Map<String,List<String>> expectedOutputMap = new HashMap<String,List<String>>();
	    	  Map<String,List<String>> expectedOutputMap2 = new HashMap<String,List<String>>();
	    	  Map<String,List<String>> expectedOutputMap3 = new HashMap<String,List<String>>();
	    	  Map<String,List<String>> expectedOutputMap4 = new HashMap<String,List<String>>();
	    	  ArrayList<String> outputList = new ArrayList<String>();
	    	  outputList.add("foo");
	    	  	      expectedOutputMap.put("A",outputList);
	    	  	      expectedOutputMap2.put("A", outputList)	   ;
	    	  	      expectedOutputMap3.put("A", outputList)	   ;
	    	  	      outputList = new ArrayList<String>();
	    	  	      outputList.add("Foo");
	    	  	      expectedOutputMap2.put("B", outputList)	   ;
	    	  	    expectedOutputMap3.put("B", outputList)	   ;
	    	  	      outputList.add("World");
	    	  	      expectedOutputMap.put("B",outputList);
	    	  	      outputList = new ArrayList<String>();
	    	  	    
	    	  	      expectedOutputMap.put("C",outputList);
	    	  	      expectedOutputMap.put("E",outputList);
	    	  	    expectedOutputMap2.put("C", outputList);
	    	  	  expectedOutputMap2.put("D", outputList);
	    	  	  expectedOutputMap2.put("E", outputList);
	    	  	 
	    	  	  expectedOutputMap3.put("C", outputList);
	    	  	  expectedOutputMap3.put("D", outputList);
	    	  	 expectedOutputMap3.put("E", outputList);
	    	  	 
	    		  expectedOutputMap4.put("A", outputList);
	    	  	  expectedOutputMap4.put("B", outputList);
	    	  	 expectedOutputMap4.put("C", outputList);
	    		  expectedOutputMap4.put("D", outputList);
	    	  	  expectedOutputMap4.put("E", outputList);
	    	  
	    	  	      
	    	  	      
	    	  	      
	    	  	      
	    	  	      
	    	  	      outputList = new ArrayList<String>();
	    	  	      outputList.add("bar");
	    	  	      outputList.add("hello");
	    	  	      expectedOutputMap.put("D",outputList);
	    	  	  
	    	  	    
	    	  	      
	    	  	     
	    	
	        return Arrays.asList(new Object[][]{
	                {"FD{foo}FFD{bar}RFFD{Foo}RFFD{World}D{}DA{hello}", expectedOutputMap},
	                {"FD{foo}FFD",expectedOutputMap2},
	                {"FD{foo}RFFDRR{Foo}", expectedOutputMap3},
	                
	                {"", expectedOutputMap4}
	        });
	    }

	    @Test
	    public void testSimulateArm() {
	    
	        Assert.assertTrue(robot.simulateArm(input).equals(expectedMap));
	    }

	}
	
