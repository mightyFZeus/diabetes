import React from 'react'
import { nutritionData } from '../../utils/data'
import NutritionPlanItem from '../NutritionPlanItem'

const NutritionTab = () => {
  return (
      <div>
          <div>
					{nutritionData.map((item, index) => (
						<NutritionPlanItem data={item} key={index} />
					))}
				</div>
    </div>
  )
}

export default NutritionTab