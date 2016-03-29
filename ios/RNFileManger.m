//
//  RNFileManger.m
//  MeiNv
//
//  Created by 李雨龙 on 16/3/29.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RNFileManger.h"
#import "RCTConvert.h"
@implementation RNFileManger

-(void)x{
  [fileManger createDirectoryAtPath:@"" withIntermediateDirectories:YES attributes:@{} error:nil];
  [fileManger fileExistsAtPath:@""];
  NSError * error;
//  error.localizedDescription
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(createDirectoryAtPath:(NSString*) path withIntermediateDirectories:(id)createIntermediates  attributes:(NSDictionary*)attributes callBack:(RCTResponseSenderBlock) callBack errorCallBack:(RCTResponseErrorBlock) errorCallBack  {
  NSString * filePath = [RCTConvert NSString: path];
  filePath = [NSHomeDirectory() stringByAppendingPathComponent:filePath];
  if(!fileManger){
    fileManger = [NSFileManager defaultManager];
  }
  NSError * error;

  BOOL success = [fileManger createDirectoryAtPath:filePath withIntermediateDirectories:[RCTConvert BOOL:createIntermediates] attributes:[RCTConvert NSDictionary:attributes] error:&error];
  if(error){
    errorCallBack(error);
  }else{
    callBack(@[[NSNull null],@[@(success),filePath]]);
  
  }
  
} )
/*!
 *  @author 李雨龙, 16-03-29 12:03:44
 *
 *  检测文件是否存在
 *
 *  @param NSString 相对于系统沙盒的位置
 *
 *  @return 通常情况 数组的第一个没有用， 第二个为 文件的完整路径
 *
 *  @since 1.0
 */
RCT_EXPORT_METHOD(fileExistsAtPath:(NSString *)path callBack:(RCTResponseSenderBlock) callBack{
  //转化为NSString
  NSString * filePath = [RCTConvert NSString: path];
  filePath = [NSHomeDirectory() stringByAppendingPathComponent:filePath];
  
  if(!fileManger){
    fileManger = [NSFileManager defaultManager];
  }
  BOOL filexEists =[fileManger fileExistsAtPath:filePath];
  callBack(@[[NSNull null],@[@(filexEists),filePath]]);
})
@end
