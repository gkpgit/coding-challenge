package com.parcelpoint.challenge;



import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Robot {
	
	

    public Map<String, List<String>> simulateArm(final String input) {
    	
    	Map<String,List<String>> outputRoboMap = new HashMap<String,List<String>>();
    
    		outputRoboMap.put("A", new ArrayList<String>());
    		outputRoboMap.put("B", new ArrayList<String>());
    		outputRoboMap.put("C", new ArrayList<String>());
    		outputRoboMap.put("D", new ArrayList<String>());
    		outputRoboMap.put("E", new ArrayList<String>());
    		
    	
    	int counter =0;
    	for(int i=0;i<input.length();i++){
    		char c = input.charAt(i);
    		switch(c) {
    		case 'F' : {
    			if(counter!=5){
    				counter++;
    			}
    			break;
    		}
    		case 'D' : {
    			
    			
    			int firstIndex = input.indexOf("{",i);
    			int indexOfClosedChar = input.indexOf('}', i+1);
    			if(firstIndex!=-1 && indexOfClosedChar!=-1 && firstIndex<indexOfClosedChar){
    	      
    				
    				String stringToBeAddedToList = input.substring(firstIndex+1,indexOfClosedChar);
    				if(counter==1){
    					if(outputRoboMap.get("A").size()<10){
    					outputRoboMap.get("A").add(stringToBeAddedToList);
    					}
    					
    				}else if(counter ==2){
    					if(outputRoboMap.get("A").size()<10){
    					
    					outputRoboMap.get("B").add(stringToBeAddedToList);
    					}
    				
    					
    				}else if(counter ==3){
    					if(outputRoboMap.get("A").size()<10){
    					 outputRoboMap.get("C").add(stringToBeAddedToList);
    					}
    				}else if(counter ==4){
    					if(outputRoboMap.get("A").size()<10){
    					outputRoboMap.get("D").add(stringToBeAddedToList);
    					}
    				}else if(counter ==5){
    					if(outputRoboMap.get("E").size()<10){
    					outputRoboMap.get("E").add(stringToBeAddedToList);
    					}
    				}
    				
    				i=indexOfClosedChar;
    				if(counter<5){
    					counter++;	
    				}
    			}	
    			
    			break;
    		}
    		
    		case 'R' : {
    			counter =0;
    			
    			break;
    		}
    		
    		default : {
    			
    		}
    		}
    			
    			
    	}
    	outputRoboMap.forEach((k,v)->System.out.println("Position : " + k + " List : " + v));
    	
        return outputRoboMap;
    }

}