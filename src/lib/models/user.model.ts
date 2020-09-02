/*
 * @Author: zhanchao.wu
 * @Date: 2020-09-01 16:45:05
 * @Last Modified by: zhanchao.wu
 * @Last Modified time: 2020-09-01 17:11:06
 */
import { BaseModel } from '../base/model.base';
import { Table, Column, DataType } from 'sequelize-typescript';
import { providerWrapper } from 'midway';
const { INTEGER } = DataType;

export enum EGender {
  /**
   * undefined
   */
  non = 0,
  /**
   * undefined
   */
  man = 1,
  /**
   * undefined
   */
  wom = 2,
}

@Table({
  tableName: 'user',
})
export class UserModel extends BaseModel {
  /**
   * 地址
   */
  @Column({ comment: '地址' })
  address: string;

  /**
   * 头像
   */
  @Column({ comment: '头像' })
  avatarUrl: string;

  /**
   * 生日
   */
  @Column({ comment: '生日' })
  birthday: string;

  /**
   * 城市
   */
  @Column({ comment: '城市' })
  city: string;

  /**
   * 所在国家
   */
  @Column({ comment: '所在国家' })
  country: string;

  /**
   * 性别0未知1男2女[0,1,2]
   */
  @Column({ comment: '性别0未知1男2女[0,1,2]', type: INTEGER })
  gender: EGender;

  /**
   * 性別自定義tag
   */

  @Column({ comment: '性別自定義tag' })
  genderTag: string;

  /**
   * 是否是自动分享
   */
  @Column({ comment: '是否是自动分享' })
  isAutoShare: number;

  /**
   * 默认语言对应i18n
   */
  @Column({ comment: '默认语言对应i18n' })
  language: string;

  /**
   * 最后操作时间
   */
  @Column({ comment: '最后操作时间' })
  lasttimestamp: Date;

  /**
   * 用户昵称
   */
  @Column({ comment: '用户昵称' })
  nickName: string;

  /**
   * openid
   */
  @Column({ comment: 'openid' })
  openId: string;

  /**
   * 密码
   */
  @Column({ comment: '密码' })
  password: string;

  /**
   * 手机号
   */
  @Column({ comment: '手机号' })
  phone: string;

  /**
   * 省份
   */
  @Column({ comment: '省份' })
  province: string;

  /**
   * 用户真实姓名
   */
  @Column({ comment: '用户真实姓名' })
  realName: string;

  /**
   * 备注
   */
  @Column({ comment: '备注' })
  remark: string;

  /**
   * 用户登陆session
   */
  @Column({ comment: '用户登陆session' })
  sessionKey: string;

  /**
   * 系统发放token
   */
  @Column({ comment: '系统发放token' })
  token: string;

  /**
   * 唯一标示
   */
  @Column({ comment: '唯一标示' })
  unionId: string;

  /**
   * 用户名
   */
  @Column({ comment: '用户名' })
  username: string;

  /**
   * 用户等级
   */
  @Column({ comment: '用户等级' })
  userLevel: number;

  /**
   * 用户邮箱
   */
  @Column({ comment: '用户邮箱' })
  email: string;

  /**
   *  区域描述,中国大陆:86; 中国香港:852; 马来西亚:60; 泰国:66
   */

  @Column({
    comment: '区域编码,中国大陆:86; 中国香港:852; 马来西亚:60; 泰国:66',
  })
  areaCode: string;

  /**
   *  区域描述,中国大陆:86; 中国香港:852; 马来西亚:60; 泰国:66
   */

  @Column({
    comment: '区域描述,中国大陆:86; 中国香港:852; 马来西亚:60; 泰国:66',
  })
  areaDesc: string;
}

// 常量生成
export class ConstAppUser {
  /**
   * address
   */
  static readonly ADDRESS: string = 'address';
  /**
   * avatarUrl
   */
  static readonly AVATAR_URL: string = 'avatarUrl';
  /**
   * birthday
   */
  static readonly BIRTHDAY: string = 'birthday';
  /**
   * city
   */
  static readonly CITY: string = 'city';
  /**
   * country
   */
  static readonly COUNTRY: string = 'country';
  /**
   * createdAt
   */
  static readonly CREATED_AT: string = 'createdAt';
  /**
   * deletedAt
   */
  static readonly DELETED_AT: string = 'deletedAt';
  /**
   * fbAccessToken
   */
  static readonly FB_ACCESS_TOKEN: string = 'fbAccessToken';
  /**
   * fbDataAccessExpirationTime
   */
  static readonly FB_DATA_ACCESS_EXPIRATION_TIME: string =
    'fbDataAccessExpirationTime';
  /**
   * fbExpiresIn
   */
  static readonly FB_EXPIRES_IN: string = 'fbExpiresIn';
  /**
   * fbFirstName
   */
  static readonly FB_FIRST_NAME: string = 'fbFirstName';
  /**
   * fbId
   */
  static readonly FB_ID: string = 'fbId';
  /**
   * fbLastName
   */
  static readonly FB_LAST_NAME: string = 'fbLastName';
  /**
   * fbName
   */
  static readonly FB_NAME: string = 'fbName';
  /**
   * fbPicture
   */
  static readonly FB_PICTURE: string = 'fbPicture';
  /**
   * fbSignedRequest
   */
  static readonly FB_SIGNED_REQUEST: string = 'fbSignedRequest';
  /**
   * fbThumbnail
   */
  static readonly FB_THUMBNAIL: string = 'fbThumbnail';
  /**
   * gender
   */
  static readonly GENDER: string = 'gender';
  /**
   * genderTag
   */
  static readonly GENDER_TAG: string = 'genderTag';
  /**
   * id
   */
  static readonly ID: string = 'id';
  /**
   * isAutoShare
   */
  static readonly IS_AUTO_SHARE: string = 'isAutoShare';
  /**
   * language
   */
  static readonly LANGUAGE: string = 'language';
  /**
   * lasttimestamp
   */
  static readonly LASTTIMESTAMP: string = 'lasttimestamp';
  /**
   * maritalStatus
   */
  static readonly MARITAL_STATUS: string = 'maritalStatus';
  /**
   * nickName
   */
  static readonly NICK_NAME: string = 'nickName';
  /**
   * openId
   */
  static readonly OPEN_ID: string = 'openId';
  /**
   * password
   */
  static readonly PASSWORD: string = 'password';
  /**
   * phone
   */
  static readonly PHONE: string = 'phone';
  /**
   * province
   */
  static readonly PROVINCE: string = 'province';
  /**
   * realName
   */
  static readonly REAL_NAME: string = 'realName';
  /**
   * remark
   */
  static readonly REMARK: string = 'remark';
  /**
   * sessionKey
   */
  static readonly SESSION_KEY: string = 'sessionKey';
  /**
   * token
   */
  static readonly TOKEN: string = 'token';
  /**
   * unionId
   */
  static readonly UNION_ID: string = 'unionId';
  /**
   * updatedAt
   */
  static readonly UPDATED_AT: string = 'updatedAt';
  /**
   * username
   */
  static readonly USERNAME: string = 'username';
  /**
   * userLevel
   */
  static readonly USER_LEVEL: string = 'userLevel';
  /**
   * EMAIL
   */
  static readonly EMAIL: string = 'email';
  /**
   * INCOME_RANGE
   */
  static readonly INCOME_RANGE: string = 'incomeRange';
  /**
   * areaCode
   */
  static readonly AREA_CODE: string = 'areaCode';
  /**
   * areaDesc
   */
  static readonly AREA_DESC: string = 'areaDesc';
}

// @provide 用 工厂模式static model
export const factory = () => UserModel;
providerWrapper([
  {
    id: 'UserModel',
    provider: factory,
  },
]);
