<?php

namespace ercling\loadingindicator;

use yii\web\JqueryAsset;

class Indicator extends \yii\base\Widget
{
    public $color='red';
    public $theme='corner-indicator';
    public $options = [
        'auto'=>true,
        'indicatorStatus'=>false
    ];

    public function run()
    {
        $asset=\Yii::$app->assetManager->publish("@ercling/loadingindicator/assets",['forceCopy'=>YII_DEBUG]);
        $this->getView()->registerCssFile($asset[1].'/themes/'.$this->color.'/pace-theme-'.$this->theme.'.css');

        $this->getView()->registerJs('
            var yii2LoadingIndicator='.json_encode($this->options).';
            ',\yii\web\View::POS_BEGIN);
        $this->getView()->registerJsFile($asset[1].'/indicator.js',['depends'=>[JqueryAsset::className()]]);

    }
}
