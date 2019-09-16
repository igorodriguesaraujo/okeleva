<?php

if( isset( $_POST ) && !empty( $_POST[] ) ) {
  echo '<pre>';
  print_r($_POST);
  echo '</pre>';
}