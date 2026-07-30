import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CardAndListGroup = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Data/CardAndListGroup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Card & ListGroup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CardAndListGroup;
