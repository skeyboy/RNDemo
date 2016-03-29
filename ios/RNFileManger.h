//
//  RNFileManger.h
//  MeiNv
//
//  Created by 李雨龙 on 16/3/29.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface RNFileManger : NSObject<RCTBridgeModule>
{
  NSFileManager * fileManger;

}
@end
