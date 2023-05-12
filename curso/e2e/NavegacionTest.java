// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class NavegacionTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() throws MalformedURLException {
    driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), DesiredCapabilities.chrome());
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void navegacion() {
    driver.get("http://localhost:4200//");
    driver.manage().window().setSize(new Dimension(1282, 821));
    driver.findElement(By.cssSelector(".highlight-card")).click();
    assertThat(driver.findElement(By.cssSelector(".highlight-card > span")).getText(), is("Hola mundo app is running!"));
    driver.findElement(By.linkText("demos")).click();
    assertThat(driver.findElement(By.cssSelector("h1")).getText(), is("Hola MUNDO"));
    driver.findElement(By.linkText("calculadora")).click();
    assertThat(driver.findElement(By.cssSelector(".Pantalla")).getText(), is("0"));
    driver.findElement(By.linkText("contactos")).click();
    assertThat(driver.findElement(By.cssSelector(".display-4")).getText(), is("Lista de contactos"));
    driver.findElement(By.linkText("alysia")).click();
    assertThat(driver.findElement(By.cssSelector("h4")).getText(), is("Ilma. Alysia Baxendale"));
    driver.findElement(By.linkText("datos")).click();
    assertThat(driver.findElement(By.cssSelector(".alert")).getText(), is("datos works!"));
    driver.findElement(By.linkText("lenta")).click();
    assertThat(driver.findElement(By.cssSelector("h1")).getText(), is("Hola MUNDO"));
  }
}
