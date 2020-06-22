
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
    
        tbl.string('username', 255).notNullable().unique();
        tbl.string('password', 255).notNullable();
        tbl.string('phoneNumber', 255).notNullable().unique();
      })
    
    
    .createTable('plants', tbl => {
        tbl.increments();

        tbl.string('nickname', 255).notNullable();
        tbl.string('species', 255).notNullable();
        tbl.string('h2oFrequency', 300).notNullable();
        tbl.string('image', 256);
        
        tbl.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
    };
  
    

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('plants').dropTableIfExists('users');
};
