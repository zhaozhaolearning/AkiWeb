package pub.akiwebbackend.domain.dto.deck;

import lombok.Data;

import java.io.Serial;
import java.io.Serializable;

/**
 * 添加错题本
 * @author cym
 * @date 2024/3/31
 */
@Data
public class DeckAddDTO implements Serializable {

    /**
     * 错题本名称
     */
    private String name;

    @Serial
    private static final long serialVersionUID = 1L;
}
