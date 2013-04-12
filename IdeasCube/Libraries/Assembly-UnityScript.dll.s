#if defined(__arm__)
.text
	.align 3
methods:
	.space 16
	.align 2
Lm_0:
m_spin_cube__ctor:
_m_0:

	.byte 13,192,160,225,128,64,45,233,13,112,160,225,0,93,45,233,4,208,77,226,13,176,160,225,0,160,160,225,10,0,160,225
bl p_1

	.byte 5,0,160,227,16,0,138,229,0,42,159,237,0,0,0,234,0,0,160,64,194,42,183,238,194,11,183,238,5,10,138,237
	.byte 0,42,159,237,0,0,0,234,102,102,102,63,194,42,183,238,194,11,183,238,6,10,138,237,4,208,139,226,0,13,189,232
	.byte 8,112,157,229,0,160,157,232

Lme_0:
	.align 2
Lm_1:
m_spin_cube_Start:
_m_1:

	.byte 13,192,160,225,128,64,45,233,13,112,160,225,0,89,45,233,8,208,77,226,13,176,160,225,0,0,139,229,8,208,139,226
	.byte 0,9,189,232,8,112,157,229,0,160,157,232

Lme_1:
	.align 2
Lm_2:
m_spin_cube_Update:
_m_2:

	.byte 13,192,160,225,128,64,45,233,13,112,160,225,0,93,45,233,52,208,77,226,13,176,160,225,0,160,160,225,10,0,160,225
	.byte 0,224,154,229
bl p_2

	.byte 0,192,160,225,0,0,160,227,16,10,0,238,192,10,184,238,192,74,183,238,2,0,160,227,16,10,0,238,192,10,184,238
	.byte 192,58,183,238,1,0,160,227,16,10,0,238,192,10,184,238,192,42,183,238,12,0,160,225,196,11,183,238,2,10,13,237
	.byte 8,16,29,229,195,11,183,238,2,10,13,237,8,32,29,229,194,11,183,238,2,10,13,237,8,48,29,229,0,224,156,229
bl p_3

	.byte 52,208,139,226,0,13,189,232,8,112,157,229,0,160,157,232

Lme_2:
	.align 2
Lm_3:
m_spin_cube_Main:
_m_3:

	.byte 13,192,160,225,128,64,45,233,13,112,160,225,0,89,45,233,8,208,77,226,13,176,160,225,0,0,139,229,8,208,139,226
	.byte 0,9,189,232,8,112,157,229,0,160,157,232

Lme_3:
	.align 2
Lm_4:
m_spin_cube_mouseDrag__ctor:
_m_4:

	.byte 13,192,160,225,128,64,45,233,13,112,160,225,0,93,45,233,44,208,77,226,13,176,160,225,0,160,160,225,10,0,160,225
bl p_1

	.byte 0,42,159,237,0,0,0,234,0,0,32,65,194,42,183,238,194,11,183,238,4,10,138,237,0,42,159,237,0,0,0,234
	.byte 0,0,128,63,194,42,183,238,194,11,183,238,5,10,138,237,0,0,160,227,0,0,139,229,0,0,160,227,4,0,139,229
	.byte 0,0,160,227,8,0,139,229,24,0,138,226,0,16,155,229,0,16,128,229,4,16,155,229,4,16,128,229,8,16,155,229
	.byte 8,16,128,229,0,0,160,227,12,0,139,229,0,0,160,227,16,0,139,229,0,0,160,227,20,0,139,229,36,0,138,226
	.byte 12,16,155,229,0,16,128,229,16,16,155,229,4,16,128,229,20,16,155,229,8,16,128,229,0,0,160,227,24,0,139,229
	.byte 0,0,160,227,28,0,139,229,0,0,160,227,32,0,139,229,52,0,138,226,24,16,155,229,0,16,128,229,28,16,155,229
	.byte 4,16,128,229,32,16,155,229,8,16,128,229,44,208,139,226,0,13,189,232,8,112,157,229,0,160,157,232

Lme_4:
	.align 2
Lm_5:
m_spin_cube_mouseDrag_OnMouseDown:
_m_5:

	.byte 13,192,160,225,128,64,45,233,13,112,160,225,0,89,45,233,8,208,77,226,13,176,160,225,0,0,139,229,0,0,155,229
	.byte 1,16,160,227,48,16,192,229,8,208,139,226,0,9,189,232,8,112,157,229,0,160,157,232

Lme_5:
	.align 2
Lm_6:
m_spin_cube_mouseDrag_Update:
_m_6:

	.byte 13,192,160,225,128,64,45,233,13,112,160,225,0,93,45,233,67,223,77,226,13,176,160,225,0,160,160,225,0,0,160,227
bl p_4

	.byte 0,0,80,227,96,0,0,10,48,0,218,229,0,0,80,227,93,0,0,10,0,0,159,229,0,0,0,234
	.long mono_aot_Assembly_UnityScript_got - . -4
	.byte 0,0,159,231
bl p_5

	.byte 16,10,2,238,194,42,183,238,66,43,177,238,60,43,139,237,0,0,159,229,0,0,0,234
	.long mono_aot_Assembly_UnityScript_got - .
	.byte 0,0,159,231
bl p_5

	.byte 16,10,3,238,195,58,183,238,60,75,155,237,0,0,160,227,16,10,0,238,192,10,184,238,192,42,183,238,0,0,160,227
	.byte 28,0,139,229,0,0,160,227,32,0,139,229,0,0,160,227,36,0,139,229,28,0,139,226,196,11,183,238,2,10,13,237
	.byte 8,16,29,229,195,11,183,238,2,10,13,237,8,32,29,229,194,11,183,238,2,10,13,237,8,48,29,229
bl p_6

	.byte 28,0,155,229,72,0,139,229,32,0,155,229,76,0,139,229,36,0,155,229,80,0,139,229,24,0,138,226,72,16,155,229
	.byte 0,16,128,229,76,16,155,229,4,16,128,229,80,16,155,229,8,16,128,229,36,0,138,226,0,16,144,229,84,16,139,229
	.byte 4,16,144,229,88,16,139,229,8,0,144,229,92,0,139,229,24,0,138,226,0,16,144,229,96,16,139,229,4,16,144,229
	.byte 100,16,139,229,8,0,144,229,104,0,139,229
bl p_7

	.byte 16,10,2,238,194,42,183,238,2,0,160,227,16,10,0,238,192,10,184,238,192,58,183,238,3,43,34,238,108,0,139,226
	.byte 84,16,155,229,88,32,155,229,92,48,155,229,96,192,155,229,0,192,141,229,100,192,155,229,4,192,141,229,104,192,155,229
	.byte 8,192,141,229,194,11,183,238,3,10,141,237
bl p_8

	.byte 36,0,138,226,108,16,155,229,0,16,128,229,112,16,155,229,4,16,128,229,116,16,155,229,8,16,128,229,57,0,0,234
	.byte 48,0,218,229,0,0,80,227,15,0,0,10,36,0,138,226,0,16,144,229,120,16,139,229,4,16,144,229,124,16,139,229
	.byte 8,0,144,229,128,0,139,229,24,0,138,226,120,16,155,229,0,16,128,229,124,16,155,229,4,16,128,229,128,16,155,229
	.byte 8,16,128,229,0,0,160,227,48,0,202,229
bl p_7

	.byte 16,10,2,238,194,42,183,238,5,10,154,237,192,58,183,238,3,43,34,238,194,11,183,238,6,10,139,237,24,0,138,226
	.byte 0,16,144,229,132,16,139,229,4,16,144,229,136,16,139,229,8,0,144,229,140,0,139,229,144,0,139,226
bl p_9

	.byte 6,10,155,237,192,42,183,238,156,0,139,226,132,16,155,229,136,32,155,229,140,48,155,229,144,192,155,229,0,192,141,229
	.byte 148,192,155,229,4,192,141,229,152,192,155,229,8,192,141,229,194,11,183,238,3,10,141,237
bl p_8

	.byte 24,0,138,226,156,16,155,229,0,16,128,229,160,16,155,229,4,16,128,229,164,16,155,229,8,16,128,229,10,0,160,225
	.byte 0,224,154,229
bl p_2

	.byte 4,1,139,229
bl p_10

	.byte 0,16,160,225,0,224,145,229
bl p_2

	.byte 0,32,160,225,168,0,139,226,2,16,160,225,0,224,146,229
bl p_11

	.byte 24,0,138,226,0,10,144,237,192,42,183,238,180,0,139,226,168,16,155,229,172,32,155,229,176,48,155,229,194,11,183,238
	.byte 0,10,141,237
bl p_12

	.byte 4,10,154,237,192,42,183,238,192,0,139,226,180,16,155,229,184,32,155,229,188,48,155,229,194,11,183,238,0,10,141,237
bl p_12

	.byte 4,193,155,229,12,0,160,225,0,1,139,229,192,16,155,229,196,32,155,229,200,48,155,229,0,0,160,227,0,0,141,229
	.byte 0,1,155,229,0,224,156,229
bl p_13

	.byte 10,0,160,225,0,224,154,229
bl p_2

	.byte 252,0,139,229
bl p_10

	.byte 0,16,160,225,0,224,145,229
bl p_2

	.byte 0,32,160,225,204,0,139,226,2,16,160,225,0,224,146,229
bl p_14

	.byte 24,0,138,226,1,10,144,237,192,42,183,238,216,0,139,226,204,16,155,229,208,32,155,229,212,48,155,229,194,11,183,238
	.byte 0,10,141,237
bl p_12

	.byte 4,10,154,237,192,42,183,238,228,0,139,226,216,16,155,229,220,32,155,229,224,48,155,229,194,11,183,238,0,10,141,237
bl p_12

	.byte 252,192,155,229,12,0,160,225,248,0,139,229,228,16,155,229,232,32,155,229,236,48,155,229,0,0,160,227,0,0,141,229
	.byte 248,0,155,229,0,224,156,229
bl p_13

	.byte 67,223,139,226,0,13,189,232,8,112,157,229,0,160,157,232

Lme_6:
	.align 2
Lm_7:
m_spin_cube_mouseDrag_Main:
_m_7:

	.byte 13,192,160,225,128,64,45,233,13,112,160,225,0,89,45,233,8,208,77,226,13,176,160,225,0,0,139,229,8,208,139,226
	.byte 0,9,189,232,8,112,157,229,0,160,157,232

Lme_7:
	.align 2
Lm_9:
m_wrapper_managed_to_native_System_Array_GetGenericValueImpl_int_object_:
_m_9:

	.byte 13,192,160,225,240,95,45,233,120,208,77,226,13,176,160,225,0,0,139,229,4,16,139,229,8,32,139,229
bl p_15

	.byte 16,16,141,226,4,0,129,229,0,32,144,229,0,32,129,229,0,16,128,229,16,208,129,229,15,32,160,225,20,32,129,229
	.byte 0,0,155,229,0,0,80,227,16,0,0,10,0,0,155,229,4,16,155,229,8,32,155,229
bl p_16

	.byte 0,0,159,229,0,0,0,234
	.long mono_aot_Assembly_UnityScript_got - . + 4
	.byte 0,0,159,231,0,0,144,229,0,0,80,227,10,0,0,26,16,32,139,226,0,192,146,229,4,224,146,229,0,192,142,229
	.byte 104,208,130,226,240,175,157,232,150,0,160,227,6,12,128,226,2,4,128,226
bl p_17
bl p_18
bl p_19

	.byte 242,255,255,234

Lme_9:
.text
	.align 3
method_addresses:
	.align 2
	.long _m_0
	.align 2
	.long _m_1
	.align 2
	.long _m_2
	.align 2
	.long _m_3
	.align 2
	.long _m_4
	.align 2
	.long _m_5
	.align 2
	.long _m_6
	.align 2
	.long _m_7
	.align 2
	.long 0
	.align 2
	.long _m_9
.text
	.align 3
methods_end:
.text
	.align 3
method_offsets:

	.long Lm_0 - methods,Lm_1 - methods,Lm_2 - methods,Lm_3 - methods,Lm_4 - methods,Lm_5 - methods,Lm_6 - methods,Lm_7 - methods
	.long -1,Lm_9 - methods

.text
	.align 3
method_info:
mi:
Lm_0_p:

	.byte 0,0
Lm_1_p:

	.byte 0,0
Lm_2_p:

	.byte 0,0
Lm_3_p:

	.byte 0,0
Lm_4_p:

	.byte 0,0
Lm_5_p:

	.byte 0,0
Lm_6_p:

	.byte 0,2,2,3
Lm_7_p:

	.byte 0,0
Lm_9_p:

	.byte 0,1,4
.text
	.align 3
method_info_offsets:

	.long Lm_0_p - mi,Lm_1_p - mi,Lm_2_p - mi,Lm_3_p - mi,Lm_4_p - mi,Lm_5_p - mi,Lm_6_p - mi,Lm_7_p - mi
	.long 0,Lm_9_p - mi

.text
	.align 3
extra_method_info:

	.byte 0,1,6,83,121,115,116,101,109,46,65,114,114,97,121,58,71,101,116,71,101,110,101,114,105,99,86,97,108,117,101,73
	.byte 109,112,108,32,40,105,110,116,44,111,98,106,101,99,116,38,41,0

.text
	.align 3
extra_method_table:

	.long 11,0,0,0,1,9,0,0
	.long 0,0,0,0,0,0,0,0
	.long 0,0,0,0,0,0,0,0
	.long 0,0,0,0,0,0,0,0
	.long 0,0
.text
	.align 3
extra_method_info_offsets:

	.long 1,9,1
.text
	.align 3
method_order:

	.long 0,16777215,0,1,2,3,4,5
	.long 6,7,9

.text
method_order_end:
.text
	.align 3
class_name_table:

	.short 11, 1, 11, 0, 0, 3, 0, 0
	.short 0, 0, 0, 0, 0, 0, 0, 0
	.short 0, 0, 0, 0, 0, 0, 0, 2
	.short 0
.text
	.align 3
got_info:

	.byte 12,0,39,17,0,1,17,0,17,33,3,193,0,20,88,3,193,0,20,245,3,193,0,21,196,3,193,0,20,180,3,193
	.byte 0,20,164,3,193,0,12,103,3,193,0,21,242,3,193,0,12,105,3,193,0,12,146,3,193,0,19,233,3,193,0,21
	.byte 166,3,193,0,12,159,3,193,0,21,195,3,193,0,21,164,7,17,109,111,110,111,95,103,101,116,95,108,109,102,95,97
	.byte 100,100,114,0,31,255,254,0,0,0,41,2,2,198,0,4,3,0,1,1,2,2,7,30,109,111,110,111,95,99,114,101
	.byte 97,116,101,95,99,111,114,108,105,98,95,101,120,99,101,112,116,105,111,110,95,48,0,7,25,109,111,110,111,95,97,114
	.byte 99,104,95,116,104,114,111,119,95,101,120,99,101,112,116,105,111,110,0,7,35,109,111,110,111,95,116,104,114,101,97,100
	.byte 95,105,110,116,101,114,114,117,112,116,105,111,110,95,99,104,101,99,107,112,111,105,110,116,0
.text
	.align 3
got_info_offsets:

	.long 0,2,3,6,9
.text
	.align 3
ex_info:
ex:
Le_0_p:

	.byte 108,2,0,0
Le_1_p:

	.byte 44,2,28,0
Le_2_p:

	.byte 128,156,2,54,0
Le_3_p:

	.byte 44,2,28,0
Le_4_p:

	.byte 129,0,2,82,0
Le_5_p:

	.byte 56,2,28,0
Le_6_p:

	.byte 132,0,2,110,0
Le_7_p:

	.byte 44,2,28,0
Le_9_p:

	.byte 128,172,2,128,139,0
.text
	.align 3
ex_info_offsets:

	.long Le_0_p - ex,Le_1_p - ex,Le_2_p - ex,Le_3_p - ex,Le_4_p - ex,Le_5_p - ex,Le_6_p - ex,Le_7_p - ex
	.long 0,Le_9_p - ex

.text
	.align 3
unwind_info:

	.byte 27,12,13,0,76,14,8,135,2,68,14,28,136,7,138,6,139,5,140,4,142,3,68,14,32,68,13,11,25,12,13,0
	.byte 76,14,8,135,2,68,14,24,136,6,139,5,140,4,142,3,68,14,32,68,13,11,27,12,13,0,76,14,8,135,2,68
	.byte 14,28,136,7,138,6,139,5,140,4,142,3,68,14,80,68,13,11,27,12,13,0,76,14,8,135,2,68,14,28,136,7
	.byte 138,6,139,5,140,4,142,3,68,14,72,68,13,11,28,12,13,0,76,14,8,135,2,68,14,28,136,7,138,6,139,5
	.byte 140,4,142,3,68,14,168,2,68,13,11,33,12,13,0,72,14,40,132,10,133,9,134,8,135,7,136,6,137,5,138,4
	.byte 139,3,140,2,142,1,68,14,160,1,68,13,11
.text
	.align 3
class_info:
LK_I_0:

	.byte 0,128,144,8,0,0,1
LK_I_1:

	.byte 7,128,128,32,0,0,4,193,0,20,240,193,0,20,214,194,0,0,4,193,0,20,213,4,3,2
LK_I_2:

	.byte 7,128,128,64,0,0,4,193,0,20,240,193,0,20,214,194,0,0,4,193,0,20,213,8,7,6
.text
	.align 3
class_info_offsets:

	.long LK_I_0 - class_info,LK_I_1 - class_info,LK_I_2 - class_info


.text
	.align 4
plt:
mono_aot_Assembly_UnityScript_plt:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 16,0
p_1:
plt_UnityEngine_MonoBehaviour__ctor:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 20,10
p_2:
plt_UnityEngine_Component_get_transform:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 24,15
p_3:
plt_UnityEngine_Transform_Rotate_single_single_single:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 28,20
p_4:
plt_UnityEngine_Input_GetMouseButton_int:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 32,25
p_5:
plt_UnityEngine_Input_GetAxis_string:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 36,30
p_6:
plt_UnityEngine_Vector3__ctor_single_single_single:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 40,35
p_7:
plt_UnityEngine_Time_get_deltaTime:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 44,40
p_8:
plt_UnityEngine_Vector3_Lerp_UnityEngine_Vector3_UnityEngine_Vector3_single:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 48,45
p_9:
plt_UnityEngine_Vector3_get_zero:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 52,50
p_10:
plt_UnityEngine_Camera_get_main:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 56,55
p_11:
plt_UnityEngine_Transform_get_up:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 60,60
p_12:
plt_UnityEngine_Vector3_op_Multiply_UnityEngine_Vector3_single:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 64,65
p_13:
plt_UnityEngine_Transform_Rotate_UnityEngine_Vector3_UnityEngine_Space:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 68,70
p_14:
plt_UnityEngine_Transform_get_right:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 72,75
p_15:
plt__jit_icall_mono_get_lmf_addr:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 76,80
p_16:
plt__icall_native_System_Array_GetGenericValueImpl_object_int_object_:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 80,100
p_17:
plt__jit_icall_mono_create_corlib_exception_0:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 84,118
p_18:
plt__jit_icall_mono_arch_throw_exception:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 88,151
p_19:
plt__jit_icall_mono_thread_interruption_checkpoint:

	.byte 0,192,159,229,12,240,159,231
	.long mono_aot_Assembly_UnityScript_got - . + 92,179
plt_end:
.text
	.align 3
mono_image_table:

	.long 3
	.asciz "Assembly-UnityScript"
	.asciz "A741CB58-764E-4572-B537-F079C403598E"
	.asciz ""
	.asciz ""
	.align 3

	.long 0,0,0,0,0
	.asciz "UnityEngine"
	.asciz "144F3BAC-C4DC-4D8B-8366-5F5AAC03FAC2"
	.asciz ""
	.asciz ""
	.align 3

	.long 0,0,0,0,0
	.asciz "mscorlib"
	.asciz "9746A8EA-7987-4B55-B6B1-43FBFA103F16"
	.asciz ""
	.asciz "7cec85d7bea7798e"
	.align 3

	.long 1,2,0,5,0
.data
	.align 3
mono_aot_Assembly_UnityScript_got:
	.space 100
got_end:
.data
	.align 3
mono_aot_got_addr:
	.align 2
	.long mono_aot_Assembly_UnityScript_got
.data
	.align 3
mono_aot_file_info:

	.long 5,100,20,10,1024,1024,128,0
	.long 0,0,0,0,0
.text
	.align 2
mono_assembly_guid:
	.asciz "A741CB58-764E-4572-B537-F079C403598E"
.text
	.align 2
mono_aot_version:
	.asciz "66"
.text
	.align 2
mono_aot_opt_flags:
	.asciz "55650815"
.text
	.align 2
mono_aot_full_aot:
	.asciz "TRUE"
.text
	.align 2
mono_runtime_version:
	.asciz ""
.text
	.align 2
mono_aot_assembly_name:
	.asciz "Assembly-UnityScript"
.text
	.align 3
Lglobals_hash:

	.short 73, 27, 0, 0, 0, 0, 0, 0
	.short 0, 15, 0, 19, 0, 0, 0, 0
	.short 0, 6, 0, 0, 0, 2, 0, 0
	.short 0, 0, 0, 0, 0, 0, 0, 29
	.short 0, 13, 0, 5, 0, 0, 0, 0
	.short 0, 4, 0, 28, 0, 0, 0, 9
	.short 0, 0, 0, 0, 0, 0, 0, 14
	.short 0, 1, 0, 0, 0, 0, 0, 12
	.short 74, 0, 0, 0, 0, 0, 0, 30
	.short 0, 3, 75, 0, 0, 0, 0, 0
	.short 0, 0, 0, 0, 0, 0, 0, 0
	.short 0, 22, 0, 0, 0, 0, 0, 0
	.short 0, 11, 0, 17, 0, 8, 0, 0
	.short 0, 0, 0, 0, 0, 0, 0, 0
	.short 0, 0, 0, 0, 0, 0, 0, 0
	.short 0, 0, 0, 0, 0, 16, 0, 20
	.short 0, 7, 73, 24, 0, 10, 0, 0
	.short 0, 0, 0, 0, 0, 0, 0, 0
	.short 0, 21, 0, 18, 76, 23, 0, 25
	.short 0, 26, 0
.text
	.align 2
name_0:
	.asciz "methods"
.text
	.align 2
name_1:
	.asciz "method_addresses"
.text
	.align 2
name_2:
	.asciz "methods_end"
.text
	.align 2
name_3:
	.asciz "method_offsets"
.text
	.align 2
name_4:
	.asciz "method_info"
.text
	.align 2
name_5:
	.asciz "method_info_offsets"
.text
	.align 2
name_6:
	.asciz "extra_method_info"
.text
	.align 2
name_7:
	.asciz "extra_method_table"
.text
	.align 2
name_8:
	.asciz "extra_method_info_offsets"
.text
	.align 2
name_9:
	.asciz "method_order"
.text
	.align 2
name_10:
	.asciz "method_order_end"
.text
	.align 2
name_11:
	.asciz "class_name_table"
.text
	.align 2
name_12:
	.asciz "got_info"
.text
	.align 2
name_13:
	.asciz "got_info_offsets"
.text
	.align 2
name_14:
	.asciz "ex_info"
.text
	.align 2
name_15:
	.asciz "ex_info_offsets"
.text
	.align 2
name_16:
	.asciz "unwind_info"
.text
	.align 2
name_17:
	.asciz "class_info"
.text
	.align 2
name_18:
	.asciz "class_info_offsets"
.text
	.align 2
name_19:
	.asciz "plt"
.text
	.align 2
name_20:
	.asciz "plt_end"
.text
	.align 2
name_21:
	.asciz "mono_image_table"
.text
	.align 2
name_22:
	.asciz "mono_aot_got_addr"
.text
	.align 2
name_23:
	.asciz "mono_aot_file_info"
.text
	.align 2
name_24:
	.asciz "mono_assembly_guid"
.text
	.align 2
name_25:
	.asciz "mono_aot_version"
.text
	.align 2
name_26:
	.asciz "mono_aot_opt_flags"
.text
	.align 2
name_27:
	.asciz "mono_aot_full_aot"
.text
	.align 2
name_28:
	.asciz "mono_runtime_version"
.text
	.align 2
name_29:
	.asciz "mono_aot_assembly_name"
.data
	.align 3
Lglobals:
	.align 2
	.long Lglobals_hash
	.align 2
	.long name_0
	.align 2
	.long methods
	.align 2
	.long name_1
	.align 2
	.long method_addresses
	.align 2
	.long name_2
	.align 2
	.long methods_end
	.align 2
	.long name_3
	.align 2
	.long method_offsets
	.align 2
	.long name_4
	.align 2
	.long method_info
	.align 2
	.long name_5
	.align 2
	.long method_info_offsets
	.align 2
	.long name_6
	.align 2
	.long extra_method_info
	.align 2
	.long name_7
	.align 2
	.long extra_method_table
	.align 2
	.long name_8
	.align 2
	.long extra_method_info_offsets
	.align 2
	.long name_9
	.align 2
	.long method_order
	.align 2
	.long name_10
	.align 2
	.long method_order_end
	.align 2
	.long name_11
	.align 2
	.long class_name_table
	.align 2
	.long name_12
	.align 2
	.long got_info
	.align 2
	.long name_13
	.align 2
	.long got_info_offsets
	.align 2
	.long name_14
	.align 2
	.long ex_info
	.align 2
	.long name_15
	.align 2
	.long ex_info_offsets
	.align 2
	.long name_16
	.align 2
	.long unwind_info
	.align 2
	.long name_17
	.align 2
	.long class_info
	.align 2
	.long name_18
	.align 2
	.long class_info_offsets
	.align 2
	.long name_19
	.align 2
	.long plt
	.align 2
	.long name_20
	.align 2
	.long plt_end
	.align 2
	.long name_21
	.align 2
	.long mono_image_table
	.align 2
	.long name_22
	.align 2
	.long mono_aot_got_addr
	.align 2
	.long name_23
	.align 2
	.long mono_aot_file_info
	.align 2
	.long name_24
	.align 2
	.long mono_assembly_guid
	.align 2
	.long name_25
	.align 2
	.long mono_aot_version
	.align 2
	.long name_26
	.align 2
	.long mono_aot_opt_flags
	.align 2
	.long name_27
	.align 2
	.long mono_aot_full_aot
	.align 2
	.long name_28
	.align 2
	.long mono_runtime_version
	.align 2
	.long name_29
	.align 2
	.long mono_aot_assembly_name

	.long 0,0
	.globl _mono_aot_module_Assembly_UnityScript_info
	.align 3
_mono_aot_module_Assembly_UnityScript_info:
	.align 2
	.long Lglobals
.text
	.align 3
mem_end:
#endif
