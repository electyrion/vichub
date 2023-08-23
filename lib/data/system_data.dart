import 'package:hive/hive.dart';

import '../components/wallpaper/wallpaper.dart';
part 'system_data.g.dart';

@HiveType(typeId: 0)
class SystemData extends HiveObject {
  SystemData({required this.wallpaper, required this.dark});

  @HiveField(0,)
  WallData wallpaper;

  @HiveField(1, )
  bool dark;

}