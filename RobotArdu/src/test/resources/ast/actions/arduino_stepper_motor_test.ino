// This file is automatically generated by the Open Roberta Lab.

#include <math.h>
#include <Stepper.h>
#include <RobertaFunctions.h>   // Open Roberta library
#include <NEPODefs.h>

RobertaFunctions rob;

int _SPU_S2 = 2048;
Stepper Motor_S2(_SPU_S2, 6, 5, 4, 3);
void setup()
{
    Serial.begin(9600); 
}

void loop()
{
    Motor_S2.setSpeed(10);
    Motor_S2.step(_SPU_S2*(5));
}