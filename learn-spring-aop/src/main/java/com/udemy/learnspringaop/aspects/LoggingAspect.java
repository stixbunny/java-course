package com.udemy.learnspringaop.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;

@Configuration
@Aspect
public class LoggingAspect {

  private Logger logger = LoggerFactory.getLogger(getClass());

  @Before("execution(* com.udemy.learnspringaop.*.*.*(..) )")
  public void logMethodCallBeforeExecution(JoinPoint joinPoint) {
    logger.info("Before Aspect - {} is called with arguments: {}", joinPoint, joinPoint.getArgs());
  }

  @After("execution(* com.udemy.learnspringaop.*.*.*(..) )")
  public void logMethodCallAfterExecution(JoinPoint joinPoint) {
    logger.info("After Aspect - {} has executed", joinPoint);
  }

  @AfterThrowing(
    pointcut = "execution(* com.udemy.learnspringaop.*.*.*(..) )",
    throwing = "exception"
    )
  public void logMethodCallAfterThrowing(JoinPoint joinPoint, Exception exception) {
    logger.info("After Throwing Aspect - {} has thrown an exception {}", joinPoint, exception);
  }

  @AfterReturning(
    pointcut = "execution(* com.udemy.learnspringaop.*.*.*(..) )",
    returning = "result"
    )
  public void logMethodCallAfterReturning(JoinPoint joinPoint, Object result) {
    logger.info("After Returning - {} has returned {}", joinPoint, result);
  }
}
