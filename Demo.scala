import java.io._

class Pointer(val aa:Int, val bb:Int) {
	var a: Int = aa
	var b: Int = bb

	def move(ww:Int, yy:Int){
		a = a + ww
		b = b + yy
	}
}

class Lokasi(override val aa:Int, override val bb:Int, val cc:Int) extends Pointer(aa, bb) {
	var c: Int = cc
def move(ww:Int, yy:Int, zz:Int){
	a = a + ww
	b = b + yy
	c = c + zz

	println ("This is the fucking location of a" + a)
	println ("This is the fucking location of b" + b)
	println ("This is the fucking location of c" + c)
}
}

object Demo {
	def main(args: Array[String]){
		val loc = new Lokasi(50, 60, 70)

		loc.move(50,30,10) //move location of these 3 point
	}
}