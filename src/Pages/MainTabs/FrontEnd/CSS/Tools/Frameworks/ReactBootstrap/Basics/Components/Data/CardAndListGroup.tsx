import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
